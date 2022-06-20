import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyB_HzcoiYKqmGSsT5sfRN1poRa0wIGDbns',
  authDomain: 'deliveryapp-180c7.firebaseapp.com',
  databaseURL: 'https://deliveryapp-180c7-default-rtdb.firebaseio.com',
  projectId: 'deliveryapp-180c7',
  storageBucket: 'deliveryapp-180c7.appspot.com',
  messagingSenderId: '215204509142',
  appId: '1:215204509142:web:c1d0cbcce593ab66bfa077',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
