import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItem = async (userId) => {
  const items = [];
  try {
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

} catch (error) {
    console.error("Error fetching items: ", error);
  }  
  return items;
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) { 
    console.error("Error adding item: ", error);
  } 
};
