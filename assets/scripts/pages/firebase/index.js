// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBkzyX8n7Lcf8qlGum6dhPOvTP1iM-bn8E',
  authDomain: 'lobbing-worksheet.firebaseapp.com',
  databaseURL:
    'https://lobbing-worksheet-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'lobbing-worksheet',
  storageBucket: 'lobbing-worksheet.appspot.com',
  messagingSenderId: '823810960766',
  appId: '1:823810960766:web:4ef91563101b53d281d72f',
  measurementId: 'G-9FBWE5CR9Y'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
