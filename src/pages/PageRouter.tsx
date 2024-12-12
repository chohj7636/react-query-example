import { Route, Routes } from 'react-router-dom';

import Main from './main';
import Testa from './testa';

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/testa" element={<Testa />} />
    </Routes>
  );
};

export default PageRouter;
