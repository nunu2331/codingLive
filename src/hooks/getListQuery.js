import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';

const getList = async params => {
  const response = await axios.get('https://reqres.in/api/users?page=2');
  return response.data;
};

export const UsesGetList = () => {
  const {isLoading, data} = useQuery(['getList'], getList);
  return {isLoading, data};
};
