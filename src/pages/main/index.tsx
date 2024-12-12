import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useComment } from '../../queryHooks';
// import { commentApi, todoApi } from '../../api/api';

const Main = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const { data, refetch } = useComment(num);

  // 쿼리 선언 방법 1
  //   const { data, refetch } = useQuery({
  //       queryKey: ['todo'],
  //       queryFn: todoApi,
  //       // enabled: false,
  //       staleTime: 1 * 60 * 1000,
  //       // retry: false,
  //       // refetchOnMount: false,
  //   });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex h-full w-full flex-col gap-5 p-10">
      <div>main page</div>
      <button className="flex w-fit border p-2" onClick={() => setNum(num + 1)}>
        Number Count
      </button>
      <button className="flex w-fit border p-2" onClick={() => refetch()}>
        Call ToDo Test API
      </button>
      <button
        className="flex w-fit border p-2"
        onClick={() => navigate('/testa')}
      >
        go testa page
      </button>

      {data ? (
        <div className="">
          zz
          {/* {data.map((element: { id: number; title: string }) => {
            return <p key={element.id}>{element.title}</p>;
          })} */}
        </div>
      ) : null}
    </div>
  );
};

export default Main;
