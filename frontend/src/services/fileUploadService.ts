import axios from 'axios';

class FileUploadService {
  clientId = '1ba9a58305fcdf8';

  async uploadFile(event: any): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      const file = event.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const result = reader?.result as string;
        const base64Image = result.split(',')[1];

        try {
          const response = await axios.post(
            'https://api.imgur.com/3/image',
            {
              image: base64Image,
              type: 'base64'
            },
            {
              headers: {
                Authorization: `Client-ID ${this.clientId}`
              }
            }
          );
          resolve(response.data.data.link);
        } catch (error) {
          console.error('Error uploading image:', error);
          reject(error);
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}

export const fileUploadService = new FileUploadService();
