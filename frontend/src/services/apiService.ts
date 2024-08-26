import axios from 'axios';
import { IStoryBoard } from '../interfaces/Idomoo'
import { IVideoResponse } from '@/interfaces/Video';

const apiClient = axios.create({
  baseURL:  'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});



export const getStoryboard = (storyboardId: number) => {
  return apiClient.get(`/storyboards/${storyboardId}`);
};

export const generateVideo = (storyBoard: Partial<IStoryBoard>): Promise<{ data: IVideoResponse }> => {
  return apiClient.post(`/storyboards/generate-video`, storyBoard);
};

export const generateLandingPage = (pageData: { lastName: string, firstName: string, url: string }) => {
  return apiClient.post('/generate-landing-page', pageData, {
    responseType: 'blob'
  })
}

export const checkVideoStatus = async (url: string): Promise<boolean> => {
  const maxRetries = 20
  const retryTimeout = 1000

  for (let retries = 0; retries < maxRetries; retries++) {
    try {
      const response = await axios.get(url);
      const status: string = response.data.status;

      if (status === 'VIDEO_AVAILABLE') {
        return true;
      } else if (status === 'ERROR' || status === 'NOT_EXIST') {
        return false;
      }

      await new Promise(resolve => setTimeout(resolve, retryTimeout));
    } catch (error) {
      console.error(`Error fetching video status: ${error}`);
      throw new Error('Failed to retrieve video status');
    }
  }

  return false;
}

