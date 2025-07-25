import { AxiosResponse } from 'axios';
import { dispatchRequest } from '..';
import { UserDTO } from '../DTOS';

export const getPosts = async (): Promise<AxiosResponse<UserDTO[]>> =>
  dispatchRequest({
    method: 'GET',
    url: 'posts',
  });
