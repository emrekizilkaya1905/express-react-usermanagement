import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  country: "",
  contact: "",
};

const AddEdit = () => {
  const [data, setData] = useState(initialState);
  const { name, email, country, contact } = data;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    if (res.status === 200) {
      setData({ ...res.data });
    }
  };

  const createUser = async (data) => {
    const res = await axios.post("http://localhost:5000/users/", data);
    if (res.status === 200) {
      toast.success(res.data);
    }
  };

  const updateUser = async (data, id) => {
    const res = await axios.put(`http://localhost:5000/users/${id}`, data);
    if (res.status === 200) {
      toast.success(res.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !country || !contact) {
      toast.error("Please fill all the blanks.");
      return;
    }
    if (!id) {
      createUser(data);
    } else {
      updateUser(data, id);
    }

    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter a name"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a email"
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter a country"
            onChange={handleInputChange}
            value={country}
          />
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter a contact"
            onChange={handleInputChange}
            value={contact}
          />
        </div>
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
