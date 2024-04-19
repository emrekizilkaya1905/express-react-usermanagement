import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");

    if (res.status === 200) {
      setData(res.data);
    }
    console.log(data);
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure?")) {
      const res = await axios.delete(`http://localhost:5000/users/${id}`);
      if (res.status === 200) {
        getUsers();
      }
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.contact}</td>
                <td>
                  <div className="buttons">
                    <button>View</button>
                    <button>Edit</button>
                    <button onClick={() => onDeleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
