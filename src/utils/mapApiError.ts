import axios, { AxiosError } from 'axios';
import { ApiError } from '../types/api-error';

export const mapApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError?.(error)) {
    const axiosError = error as AxiosError<any>;
    const responseData = axiosError.response?.data;
    let message =
      responseData?.status_message || axiosError.message || 'An error occurred';
    if (responseData?.message) {
      message = responseData.message;
    }
    if (responseData?.errors && typeof responseData.errors === 'object') {
      const firstField = Object.keys(responseData.errors)[0];
      const messages = responseData.errors[firstField];
      if (Array.isArray(messages) && messages.length > 0) {
        message = messages[0];
      }
    }

    return {
      message,
      code: responseData?.status_code,
      status: axiosError.response?.status,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: 'An unknown error occurred',
  };
};
