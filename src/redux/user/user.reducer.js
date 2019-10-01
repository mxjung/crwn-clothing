import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

// Default Paramter: If state is undefined/not set, it will use initial value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
