"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const idomooController_1 = require("./controllers/idomooController");
const htmlController_1 = require("./controllers/htmlController");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use((0, cors_1.default)({
    origin: 'http://localhost:8080',
}));
app.use(express_1.default.json());
app.get('/storyboards/:storyboardId', idomooController_1.idomooController.getStoryboard);
app.post('/storyboards/generate-video', idomooController_1.idomooController.generateVideo);
app.post('/generate-landing-page', htmlController_1.htmlController.generateLandingPage);
app.get('*', (req, res) => {
    console.log("🚀 ~ app.get ~ __dirname:", __dirname);
    console.log("🚀 ~ app.get ~ (path.join(__dirname, './public/index.html':", path_1.default.join(__dirname, '../public/index.html'));
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
