import { Request, Response } from 'express';
import { htmlService } from '../services/htmlService';

class HtmlController {
  async generateLandingPage(req: Request, res: Response) {
    try {
      const data = req.body;
      const htmlContent = htmlService.getLandingPage(data)
      res.setHeader('Content-Type', 'text/html');
      res.send(htmlContent);
    } catch (error) {
      res.status(500).send('Failed to create landing page');
    }
  }

}

export const htmlController = new HtmlController();