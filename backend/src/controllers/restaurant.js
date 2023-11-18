// Module Controller
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import config from '../config/index.js';

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const restaurants = collection(db, 'restaurants');

const index = async (req, res) => {
    const restaurantSnapshot = await getDocs(restaurants);
    const restaurantData = restaurantSnapshot.docs.map(doc => {
      return { name: doc.data().name || null};
    });
  
    return res.json({ restaurantData });
  };
  
  const addName = async (req, res) => {
    try {
      const { name } = req.body;
      
      const id = "HIhk7UXflI734uo9thXC";

      // Get the document reference
      const restaurantDocRef = doc(db, 'restaurants', id);
  
      // Get the current data in the document
      const restaurantDocSnapshot = await getDoc(restaurantDocRef);
      const currentData = restaurantDocSnapshot.data();
  
      // Ensure that the "name" property exists and is an array
      const nameArray = Array.isArray(currentData?.name) ? currentData.name : [];
  
      // Add the new name to the array
      nameArray.push(name);
  
      // Update the document with the modified "name" array
      await updateDoc(restaurantDocRef, { name: nameArray });
  
      return res.json({ success: true });
    } catch (error) {
      console.error('Error adding name:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export default {
    index,
    addName
  };
  