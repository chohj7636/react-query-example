import axios from 'axios';

export interface CommentParamsType {
  id: number;
}

// no Params GET API
export const todoApi = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`,
  );
  return response.data;
};

// Params GET API
export const commentApi = async (info: CommentParamsType) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      params: {
        postId: info.id,
      },
    },
  );
  return response.data;
};
