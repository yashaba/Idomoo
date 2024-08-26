import { Request, Response } from 'express';
import { idomooService } from '../services/idomooService';

class IdomooController {
  async getStoryboard(req: Request, res: Response) {
    try {
      const data = await idomooService.fetchStoryboard(req.params.storyboardId);
      res.json(data);
    } catch (error) {
      res.status(500).send('Failed to retrieve storyboard data');
    }
  }

  async generateVideo(req: Request, res: Response) {
    try {
      const data = await idomooService.generateVideo(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).send('Failed to generate video');
    }
  }
}

export const idomooController = new IdomooController();