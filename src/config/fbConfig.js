import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBatFOmq0Rs8Px765rnQhel6aDyNMbNPt0',
  authDomain: 'mario-plan-7853a.firebaseapp.com',
  databaseURL: 'https://mario-plan-7853a.firebaseio.com',
  projectId: 'mario-plan-7853a',
  storageBucket: 'mario-plan-7853a.appspot.com',
  messagingSenderId: '344767660356',
  appId: '1:344767660356:web:bbbf6cbc1e1b6969',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export const auth = firebase.auth();
export default firebase;
