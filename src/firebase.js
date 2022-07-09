import firebase from "firebase/app";
import 'firebase/database';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

firebase.initializeApp({
 
});


export const firestore = firebase.firestore();
export const database = firebase.database();
export const storage = firebase.storage();

export const auth = firebase.auth();
