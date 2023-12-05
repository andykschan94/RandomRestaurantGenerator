// Module Controller
import { getRestaurantByID, updateRestaurant } from '../library/restaurant.js';
import { validationResult, body } from 'express-validator';

const index = async (req, res) => {

  try {
        const restaurantData = await getRestaurantByID("HIhk7UXflI734uo9thXC");
        // Check if the 'name' array exists in the restaurant data
        if (restaurantData && restaurantData.name && Array.isArray(restaurantData.name) && restaurantData.name.length > 0) {

          return res.json({name: restaurantData.name});
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
  const validateParams = (req, res, next) => {
    const validationMiddleware = [
      body('name').isString().notEmpty(),
      // Add more validation rules as needed
    ];
  
    // Run validation middleware
    Promise.all(validationMiddleware.map(validation => new Promise((resolve, reject) => {
      validation(req, res, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    })))
      .then(() => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          next();
        } else {
          res.status(400).json({ errors: errors.array() });
        }
      })
      .catch(error => {
        console.error('Error in validation middleware:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };
  


  export default {
    index,
    addName,
    validateParams
  };
