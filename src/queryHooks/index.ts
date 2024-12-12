import { useQuery } from '@tanstack/react-query';
import { commentApi } from '../api/api';

export const useComment = (id: number) => {
  return useQuery({
    queryKey: ['comment'],
    queryFn: () => commentApi({ id }),
    // staleTime: 10 * 60 * 1000,
    staleTime: 3000,
    enabled: !!id, // id가 있을 경우에만 쿼리를 요청
    // enabled: false,
  });
};
