import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateCard() {
  const [userForm, setUserForm] = useState({
    heading: "",
    description: "",
    address: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/cards/create-card", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          heading: "",
          description: "",
          address: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto mt-8 bg-gradient-to-r from-indigo-500">
      <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Card</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Heading
            </label>
            <input
              type="text"
              className="form-control"
              name="heading"
              id="heading"
              value={userForm.heading}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              value={userForm.description}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={userForm.address}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
