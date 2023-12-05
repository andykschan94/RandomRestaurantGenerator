// Module Controller
import { getRestaurantByID, updateRestaurant } from '../library/restaurant.js';
import { validationResult, body } from 'express-validator';

const index = async (req, res) => {

  try {
        // Validate parameters
        await validateParams(req);

        const restaurantData = await getRestaurantByID("HIhk7UXflI734uo9thXC");
        // Check if the 'name' array exists in the restaurant data
        if (restaurantData && restaurantData.name && Array.isArray(restaurantData.name) && restaurantData.name.length > 0) {
          // Pick a random restaurant name
          const randomName = restaurantData.name[Math.floor(Math.random() * restaurantData.name.length)];

          return res.json({ randomName });
      } else {
          throw new Error("Invalid restaurant data structure or empty name array");
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: error.message });
    }
  };
  
  const addName = async (req, res) => {
    try {

      const { name } = req.body;
      const currentData = await getRestaurantByID("HIhk7UXflI734uo9thXC");
  
      // Ensure that the "name" property exists and is an array
      const nameArray = Array.isArray(currentData?.name) ? currentData.name : [];
  
      if(!nameArray.includes(name))
      { 
        // Add the new name to the array
        nameArray.push(name);

         // Update the document with the modified "name" array
        await updateRestaurant ('HIhk7UXflI734uo9thXC', nameArray);
    
        return res.json({ success: true });
      }
      else {
            return res.json({ success: false, message: "Name already exists" });
      }
     
    } catch (error) {
      console.error('Error adding name:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Middleware for parameter validation
  const validateParams = [
    body('name').isString().notEmpty(),
    // Add more validation rules as needed

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];

  export default {
    index,
    addName,
    validateParams
  };
  