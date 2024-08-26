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
Object.defineProperty(exports, "__esModule", { value: true });
exports.idomooController = void 0;
const idomooService_1 = require("../services/idomooService");
class IdomooController {
    getStoryboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield idomooService_1.idomooService.fetchStoryboard(req.params.storyboardId);
                res.json(data);
            }
            catch (error) {
                res.status(500).send('Failed to retrieve storyboard data');
            }
        });
    }
    generateVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield idomooService_1.idomooService.generateVideo(req.body);
                res.json(data);
            }
            catch (error) {
                res.status(500).send('Failed to generate video');
            }
        });
    }
}
exports.idomooController = new IdomooController();
