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

//This is for an outside CronJob to keep the production from shutting down
app.get('/keep-alive', (req,res)=> res.send(200));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});