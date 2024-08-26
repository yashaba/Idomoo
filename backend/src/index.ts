import express from 'express';
import { idomooController } from './controllers/idomooController';
import { htmlController } from './controllers/htmlController';
import path from 'path';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(cors({
    origin: 'http://localhost:8080',
}));
app.use(express.json());

app.get('/storyboards/:storyboardId', idomooController.getStoryboard);
app.post('/storyboards/generate-video', idomooController.generateVideo);
app.post('/generate-landing-page', htmlController.generateLandingPage);

app.get('*', (req, res) => {
    console.log("🚀 ~ app.get ~ __dirname:", __dirname)
    console.log("🚀 ~ app.get ~ (path.join(__dirname, './public/index.html':", path.join(__dirname, '../public/index.html'))
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});