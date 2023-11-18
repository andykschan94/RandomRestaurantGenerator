import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUndefined, isString } from 'lodash-es';

import { getRestaurant, postRestaurant } from '../api/restaurant';

const GenerateRestaurant = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
  try {
    const response = await postRestaurant({ name });
    alert(`"${name}" has been added to the restaurant list`);
  } catch (error) {
    console.error('Error posting restaurant:', error);
  }
  };

  const handleGetRestaurant = async () => {
    try {
      const response = await getRestaurant();

      if (response && response.restaurantData && Array.isArray(response.restaurantData)) {
        // Extract the array of restaurant names
        const restaurantNames = response.restaurantData[0]?.name || [];
  
        if (restaurantNames.length > 0) {
          // Randomly select a restaurant
          const randomIndex = Math.floor(Math.random() * restaurantNames.length);
          const selectedRestaurant = restaurantNames[randomIndex];
  
          alert(`Selected Restaurant: ${selectedRestaurant}`);
  
          // Optionally, you can navigate or display the selected restaurant as needed
          // Example: navigate('/selected-restaurant');
        } else {
          alert('No restaurants available.');
        }
      } else {
        console.error('Invalid data structure.');
      }
    } catch (error) {
      console.error('Error getting restaurant:', error);
    }
  };

  return (
    <div className="pt-14">
      <div className="max-w-[70%] mx-auto py-5 p-12 rounded shadow-md bg-smoke-white">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Generate Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
          <div className="flex items-center">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2 mr-2">
              Enter Restaurant Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ border: '1px solid #000000' }}
              placeholder="Enter restaurant name..."
              required
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
        <button
            className="bg-[#007BFF] w-full text-white font-bold py-2 px-4 rounded shadow-md"
            onClick={handleGetRestaurant}
          >
            Get Restaurant
          </button>
      </div>
    </div>
  );
};

export default GenerateRestaurant;
