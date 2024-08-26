import dotenv from 'dotenv';
dotenv.config();

export const config = {
  accountId: process.env.ACCOUNT_ID || '',
  secretApiKey: process.env.SECRET_API_KEY || '',
  tokenUrl: 'https://usa-api.idomoo.com/api/v3/oauth/token',
  apiBaseUrl: 'https://usa-api.idomoo.com/api/v3',
};