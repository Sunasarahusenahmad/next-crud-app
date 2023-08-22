import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAsync, fetchUserAsync } from "../../store/slice/UserSlice";

const UserList = () => {
  // Global State Management
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    // Get Data Using Redux
    dispatch(fetchUserAsync());
  }, []);

  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [filteredUsers, setFilteredUsers] = useState(users); // State for filtered users

  useEffect(() => {
    // Filter users based on the search term
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      await dispatch(deleteUserAsync(userId));
      await dispatch(fetchUserAsync());
    }
  };

  return (
    <>
      <div className="bg-gray-200 p-4 flex items-center">
        <h1 className="text-3xl font-bold flex-grow">
          NEXT, MYSQL, NODE, EXPRESS CRUD APPLICATION
        </h1>
        <input
          type="text"
          placeholder="Search by name..."
          className="border rounded p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link href={"/adduser"}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4  shadow-md transition duration-300 ease-in-out md:w-32 md:text-lg">
            Add User
          </button>
        </Link>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="overflow-x-auto w-1/2">
            <table className="min-w-full bg-dark">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 bg-gray-100 text-center text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((e, i) => (
                    <tr key={e.id} className="transition hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-no-wrap">{e.name}</td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {e.email}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        {e.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        <Link href={`adduser/${e.id}`}>
                          <button className="text-green-500 hover:underline mr-2">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="text-red-500 hover:underline"
                          onClick={handleDelete.bind(null, e.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <td style={{ paddingTop: "1em" }}>User Not found</td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
