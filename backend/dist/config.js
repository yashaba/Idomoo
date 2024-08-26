"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    accountId: process.env.ACCOUNT_ID || '',
    secretApiKey: process.env.SECRET_API_KEY || '',
    tokenUrl: 'https://usa-api.idomoo.com/api/v3/oauth/token',
    apiBaseUrl: 'https://usa-api.idomoo.com/api/v3',
    maxVideoRetries: 20
};
