import axios, { AxiosError } from 'axios';
import { getToken } from './tokenService';
import { config } from '../config';
import { IStoryboard } from '../interfaces/Idomoo';
import { IGenerateVideoRequest } from '../interfaces/requests';

class IdomooService {
  async fetchStoryboard(storyboardId: string) {
    try {
      const token = await getToken();
      console.log("🚀 ~ IdomooService ~ fetchStoryboard ~ token:", token)
      const response = await axios.get(`${config.apiBaseUrl}/storyboards/${storyboardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching storyboard from Idomoo API');
    }
  };

  async generateVideo(data: IGenerateVideoRequest) {
    try {
      const token = await getToken();
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
        "data": data.data.map((dataItem: { key: any; val: any; }) => ({
          key: dataItem.key,
          val: dataItem.val
        }))
      }

      const response = await axios.post('https://usa-api.idomoo.com/api/v3/storyboards/generate', body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-idomoo-api-mode': '',
          Signature: '',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      return response.data;
    } catch (error: any) {
      console.error('Error generating video:', error.response.data);
      throw error;
    }
  };


}



export const idomooService = new IdomooService();