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
exports.htmlController = void 0;
const htmlService_1 = require("../services/htmlService");
class HtmlController {
    generateLandingPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const htmlContent = htmlService_1.htmlService.getLandingPage(data);
                console.log("🚀 ~ HtmlController ~ generateLandingPage ~ htmlContent:", htmlContent);
                res.setHeader('Content-Type', 'text/html');
                res.send(htmlContent);
            }
            catch (error) {
                res.status(500).send('Failed to create landing page');
            }
        });
    }
}
exports.htmlController = new HtmlController();
