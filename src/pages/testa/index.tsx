import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useComment } from '../../queryHooks';

const Testa = () => {
  const navigate = useNavigate();

  // const { data } = useComment(1);

  const { data } = useQuery({
    queryKey: ['comment'],
  });

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <div className="flex h-full w-full flex-col gap-5 p-10">
      <div>testa</div>
      <button className="flex w-fit border p-2" onClick={() => navigate('/')}>
        go main page
      </button>
    </div>
  );
};

export default Testa;
