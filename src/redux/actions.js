import { createNotification } from "../common/createNotifications";
import {
  addProductRoute,
  addUserRoute,
  allProductsRoute,
  allUsersRoute,
  getSingleProductRoute,
  getSingleUserRoute,
  loginRoute,
} from "../utils/endpoints";
import {
  ADD_PRODUCT,
  ADD_USER,
  ALL_USERS,
  LOGIN,
  SET_PRODUCTS_LIST,
  SINGLE_PRODUCT,
  SINGLE_USER,
} from "./constants";
import axios from "../utils/axios";

export const userlogin = (user, setLoading, navigate) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(loginRoute, user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate && navigate("/");
    createNotification("success", "Success", "Login Successful");
    localStorage.setItem("user", true);
    window.location.reload();
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const getProducts = (setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(allProductsRoute);
    dispatch({ type: SET_PRODUCTS_LIST, payload: res.data.data });
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const getUsers = (setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(allUsersRoute);
    dispatch({ type: ALL_USERS, payload: res.data.data });
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const getSingleProduct = (id, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(getSingleProductRoute(id));
    dispatch({ type: SINGLE_PRODUCT, payload: res.data });
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const getSingleuser = (id, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(getSingleUserRoute(id));
    dispatch({ type: SINGLE_USER, payload: res.data });
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const addProduct = (data, setLoading, navigate) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(addProductRoute, data);
    dispatch({ type: ADD_PRODUCT, payload: res.data });
    navigate && navigate("/products");
    createNotification("success", "Success", "Product Added Successful");
  } catch (error) {
    createNotification("error", "Error", "Error Adding Product");
  }
  setLoading && setLoading(false);
};

export const addUser = (data, setLoading, navigate) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(addUserRoute, data);
    dispatch({ type: ADD_USER, payload: res.data });
    navigate && navigate("/users");
    createNotification("success", "Success", "User Added Successful");
  } catch (error) {
    createNotification("error", "Error", "Error Adding Product");
  }
  setLoading && setLoading(false);
};
