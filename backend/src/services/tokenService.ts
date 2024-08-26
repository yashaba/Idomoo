import axios from 'axios';
import { config } from '../config';

let token = '';
let tokenExpiresAt = 0;

export const getToken = async (): Promise<string> => {
  const now = Math.floor(Date.now() / 1000); 

  if (!token || now >= tokenExpiresAt) {
    try {
      const response = await axios.post(config.tokenUrl, {}, {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${config.accountId}:${config.secretApiKey}`).toString('base64')}`,
        },
      });

      token = response.data.access_token;
      tokenExpiresAt = now + response.data.expires_in; 
      console.log('New token acquired:', token);
    } catch (error :any) {
      console.log("🚀 ~ getToken ~ error:", error)
      console.error('Failed to acquire token:', JSON.stringify(error));

      console.error('Failed to acquire token:', error.response.data.errors);
      throw error;
    }
  }

  return token;
};