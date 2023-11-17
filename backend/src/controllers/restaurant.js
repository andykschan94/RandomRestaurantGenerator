// Module Controller
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import config from '../config/index.js';

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const restaurants = collection(db, 'restaurants');

const index = async (req, res) => {
    const restaurantSnapshot = await getDocs(restaurants);
    const restaurantData = restaurantSnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
  
    return res.json({ restaurantData });
  };
  
  export default {
    index
  };
  