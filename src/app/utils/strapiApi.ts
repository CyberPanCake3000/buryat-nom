import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class StrapiError extends Error {
  constructor(public status: number, public data: any) {
    super(`Strapi API Error: ${status}`);
    this.name = 'StrapiError';
  }
}

interface RequestOptions extends AxiosRequestConfig {
  headers?: Record<string, string>;
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});

const handleResponse = async <T>(promise: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await promise;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new StrapiError(error.response.status, error.response.data);
    }
    throw error;
  }
};

export const strapiApi = {
  get: <T>(path: string, options: RequestOptions = {}): Promise<T> =>
    handleResponse(api.get<T>(path, options)),

  post: <T>(path: string, data: any, options: RequestOptions = {}): Promise<T> =>
    handleResponse(api.post<T>(path, data, options)),

  put: <T>(path: string, data: any, options: RequestOptions = {}): Promise<T> =>
    handleResponse(api.put<T>(path, data, options)),

  delete: <T>(path: string, options: RequestOptions = {}): Promise<T> =>
    handleResponse(api.delete<T>(path, options)),
};

export default strapiApi;