import {
  ADD_PRODUCT,
  ALL_USERS,
  LOGIN,
  SET_PRODUCTS_LIST,
  SINGLE_PRODUCT,
  SINGLE_USER,
} from "./constants";

const initialState = {
  user: {},
  products: [],
  users: [],
  addProduct: {},
  product: {},
};

const mainreducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: { ...payload },
      };
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        products: { ...payload },
      };
      case ALL_USERS:
      return {
        ...state,
        users: { ...payload },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: { ...payload },
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        product: { ...payload },
      };
      case SINGLE_USER:
        return {
          ...state,
          user: { ...payload },
        };
    default:
      return {
        ...state,
      };
  }
};

export default mainreducer;
