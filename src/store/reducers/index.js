import authReducer from './authReducer';
import projectReducer from './projectReducer';
// import {firestoreReducer} from 'redux-firestore';
import {combineReducers} from 'redux';

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  // firestore: firestoreReducer,
});
