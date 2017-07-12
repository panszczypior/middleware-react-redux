import axios from 'axios';
import {
  FETCH_USERS
} from './types';

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = () => {
  const request = axios.get(url);
  return {
    type: FETCH_USERS,
    payload: request,
  };
};


export {
  fetchUsers,
};
