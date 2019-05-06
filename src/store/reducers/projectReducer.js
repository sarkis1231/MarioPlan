import {CREATE_PROJECT, GET_PROJECT} from '../actions/projectActions';

const INITIAL_STATE = {
  projects: [
    // {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    // {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    // {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
  ],
  projectDetail: [],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('created project', action.payload);
      return state;
    case GET_PROJECT:
      return {
        ...state,
        projects: [...action.payload],
      };
    default:
      return state;
  }
};

export default projectReducer;
