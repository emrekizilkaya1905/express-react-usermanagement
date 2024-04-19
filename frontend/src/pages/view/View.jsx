import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useFetcher, useParams } from "react-router-dom";
import { useToast } from "react-toastify";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    if (res.status === 200) {
      setUser({ ...res.data });
    }
  };

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  return (
    <div>
      <div>
        <b>ID:</b> <span>{user.id}</span>
      </div>
      <div>
        <b>Name:</b> <span>{user.name}</span>
      </div>
      <div>
        <b>Email:</b> <span>{user.email}</span>
      </div>
      <div>
        <b>Country:</b> <span>{user.country}</span>
      </div>
      <div>
        <b>Contact:</b> <span>{user.contact}</span>
      </div>
      <Link to={`/update/${user.id}`}>
        <button>Edit</button>
      </Link>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default View;
