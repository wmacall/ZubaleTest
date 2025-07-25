import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers!.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers!.common!.Accept = 'application/json';
    const resource = await axiosInstance.request(request);
    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};
