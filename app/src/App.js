import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Restaurant from './components/Restaurant';

import { isUndefined } from 'lodash';

const App = () => {

  return (
      <div>
        <div className="bg-light-brown h-[100vh]">
          <Routes>
            <Route path="/" element={<Restaurant />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
