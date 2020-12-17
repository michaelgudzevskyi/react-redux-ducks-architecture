/**
 * Types
 */
export const Types = {
  GET_TOKEN: 'authenticate/GET_TOKEN',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  accessToken: '',
  authenticated: true,
};

/**
 * Actions
 */
export const Creators = {
  getToken: token => {
    return {
      type: Types.GET_TOKEN,
      accessToken: token,
      authenticated: true,
    };
  },
};

export default function authenticateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      };
    default:
      return state;
  }
}
