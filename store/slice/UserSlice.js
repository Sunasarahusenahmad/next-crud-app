import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
      console.log(action.payload);
      return { user };
    },
    fetchUser: (state, action) => {
      return { ...state, user: action.payload }; // Replace the state with new data
    },
    updateUser: (state, action) => {
      state.user.push(action.payload);
      return { user };
    },
    fetchPerUser: (state, action) => {
      return { ...state, peruser: action.payload }; // Replace the state with new data
    },
    deleteUser: (state, action) => {
      return { user };
    },
  },
});

export const { addUser, fetchUser, updateUser, fetchPerUser, deleteUser } =
  UserSlice.actions;
export default UserSlice.reducer;

// Async action creator for post data

export const addUserAsync = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/routes`,
      userData
    );

    const addedUser = response.data;

    dispatch(addUser(addedUser)); // Add the user to Redux Store
  } catch (err) {
    console.log("Add User Error :", err);
  }
};

// Async action creator for fetch data

export const fetchUserAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/routes`
    );
    const userData = response.data;
    dispatch(fetchUser(userData)); // Dispatch the action with the fetched data
  } catch (err) {
    console.log("Fetch User Error :", err);
  }
};

// Async action creator for update data

export const updateUserAsync = (id, userData) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
      userData
    );

    const updatedUser = response.data;

    dispatch(updateUser(updatedUser)); // Update the user to Redux Store
  } catch (err) {
    console.log("Update User Error :", err);
  }
};

// Async action creator for fetch PER User data
export const fetchPerUserAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
    );
    const userData = response.data[0];
    let data = dispatch(fetchPerUser(userData)); // Dispatch the action with the fetched
    return data.payload;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Async action creator for delete data

export const deleteUserAsync = (id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);
    dispatch(deleteUser(id)); // Delete the user to Redux store
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
