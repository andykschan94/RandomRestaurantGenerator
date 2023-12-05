import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import config from '../config/index.js';

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

const restaurants = collection(db, 'restaurants');

export const getRestaurantByID = async restaurantsID => {

    const restaurantDocRef = doc(restaurants, restaurantsID);
    const restaurantDocSnapshot = await getDoc(restaurantDocRef);

    //Check if id exist
    if(!restaurantDocSnapshot.exists())
    {
        throw new Error("Restaurant not found!");
    }
    return restaurantDocSnapshot.data();

}

export const updateRestaurant = async (restaurantsID, restaurantsName) => {
    
    const restaurantDocRef = doc(restaurants, restaurantsID);
    const restaurantDocSnapshot = await getDoc(restaurantDocRef);

    //Check if id exist
    if(!restaurantDocSnapshot.exists())
    {
        throw new Error("Restaurant not found!");
    }
    try{
        // Update the document with the modified "name" array
        await updateDoc(restaurantDocRef, { name: restaurantsName });
        return({ success: true }); 
    }catch(error)
    {
        return ({ error: 'Error updating' });
    }
}