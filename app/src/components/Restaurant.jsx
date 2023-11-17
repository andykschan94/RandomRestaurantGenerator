import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUndefined, isString } from 'lodash-es';

import { postRestaurant } from '../api/restaurant';

const GenerateRestaurant = () => {
  const [restName, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

      const response = await postRestaurant(
        {
          restName,
        }
      );
  };

  return (
    <div className="pt-14">
      <div className="max-w-[70%] mx-auto py-5 p-12 rounded shadow-md bg-smoke-white">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Generate Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Restaurant Name
              </label>
              <input
                type="text"
                id="restName"
                value={restName}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4 pt-5">
            <button
              className="bg-[#75c058] w-full text-white font-bold py-2 px-4 rounded shadow-md"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateRestaurant;
