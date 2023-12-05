import React, { useState, useEffect } from 'react';
import { getRestaurant, postRestaurant } from '../api/restaurant';

// Custom hook for managing restaurant data
const useRestaurantData = () => {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleGetRestaurant = async () => {
    try {
      const response = await getRestaurant();

      if (!response || !response.name || !Array.isArray(response.name)) {
        console.error('Invalid data structure.');
        return;
      }

      setRestaurantNames(response.name);
    } catch (error) {
      console.error('Error getting restaurant:', error);
    }
  };

  const handleAddRestaurant = async (name) => {
    try {
      await postRestaurant({ name });
      // Refresh the restaurant list after adding a new one
      handleGetRestaurant();
    } catch (error) {
      console.error('Error posting restaurant:', error);
    }
  };

  useEffect(() => {
    // Load restaurant data on component mount
    handleGetRestaurant();
  }, []);

  useEffect(() => {
    if (restaurantNames.length > 0) {
      // Select random restaurant when the restaurant list changes
      const randomIndex = Math.floor(Math.random() * restaurantNames.length);
      setSelectedRestaurant(restaurantNames[randomIndex]);
    }
  }, [restaurantNames]);

  return {
    restaurantNames,
    selectedRestaurant,
    handleGetRestaurant,
    handleAddRestaurant,
  };
};

// Component using the custom hook
const GenerateRestaurant = () => {
  const { restaurantNames, selectedRestaurant, handleGetRestaurant, handleAddRestaurant } =
    useRestaurantData();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddRestaurant(name);
    alert(`"${name}" has been added to the restaurant list`);
    handleGetRestaurant();
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
              type="submit"
            >
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
        {selectedRestaurant && (
          <div className="mt-4">
            <p className="text-lg font-bold text-center text-gray-700">
              Selected Restaurant: {selectedRestaurant}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateRestaurant;
