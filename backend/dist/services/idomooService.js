"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idomooService = void 0;
const axios_1 = __importDefault(require("axios"));
const tokenService_1 = require("./tokenService");
const config_1 = require("../config");
class IdomooService {
    fetchStoryboard(storyboardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield (0, tokenService_1.getToken)();
                const response = yield axios_1.default.get(`${config_1.config.apiBaseUrl}/storyboards/${storyboardId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                throw new Error('Error fetching storyboard from Idomoo API');
            }
        });
    }
    ;
    generateVideo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield (0, tokenService_1.getToken)();
                const body = {
                    "storyboard_id": data.storyboard_id,
                    "output": {
                        "video": [
                            {
                                "format": data.format || "mp4",
                                "quality": data.quality || 10,
                                "height": data.height || 1080
                            }
                        ],
                    },
                    "data": data.data.map((dataItem) => ({
                        key: dataItem.key,
                        val: dataItem.val
                    }))
                };
                const response = yield axios_1.default.post('https://usa-api.idomoo.com/api/v3/storyboards/generate', body, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'x-idomoo-api-mode': '',
                        Signature: '',
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                console.log('Video generated:', response.data);
                return response.data;
            }
            catch (error) {
                console.error('Error generating video:', error.response.data);
                //   console.error('Error generating video:', error);
                throw error;
            }
        });
    }
    ;
}
exports.idomooService = new IdomooService();
