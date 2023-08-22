import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserAsync,
  fetchPerUserAsync,
  updateUserAsync,
} from "../../store/slice/UserSlice";
import { useRouter } from "next/router";

const AddUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const users = useSelector((state) => state.user.peruser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await dispatch(updateUserAsync(id, userData));
    } else {
      await dispatch(addUserAsync(userData));
    }
    router.push("/");
  };

  // Fetch Data
  useEffect(() => {
    dispatch(fetchPerUserAsync(id))
      .then((data) => {
        console.log(data);
        setUserData({
          name: data.name,
          email: data.email,
          contact: data.contact,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="add-user-container">
      <form className="add-user-form">
        <h2 className="text-3xl">{id ? "Update User" : "Add User"}</h2>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={userData.name}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={userData.email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter your contact number"
            onChange={handleInputChange}
            value={userData.contact}
          />
        </div>
        <Link href={"/"}>
          <button
            type="button" // Change to "button" to prevent form submission
            className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 shadow-md transition duration-300 ease-in-out md:w-32 md:text-lg"
          >
            Go Back
          </button>
        </Link>
        {id ? (
          <button
            type="button" // Change to "button" to prevent form submission
            className="ml-1 bg-blue-500 text-white py-2 px-4 shadow-md transition duration-300 ease-in-out md:w-32 md:text-lg"
            onClick={handleSubmit}
          >
            Edit User
          </button>
        ) : (
          <button
            type="button" // Change to "button" to prevent form submission
            className={`ml-1 ${
              userData.name === "" ||
              userData.email === "" ||
              userData.contact === ""
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500"
            } text-white py-2 px-4 shadow-md transition duration-300 ease-in-out md:w-32 md:text-lg`}
            onClick={handleSubmit}
            disabled={
              userData.name === "" ||
              userData.email === "" ||
              userData.contact === ""
            }
          >
            Add User
          </button>
        )}
      </form>
    </div>
  );
};

export default AddUser;
