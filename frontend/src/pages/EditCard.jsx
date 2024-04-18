import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditCard() {
    const [userForm, setUserForm] = useState({
        heading: "",
        description: "",
        address: ""
    });

    let params = useParams();
    let navigate = useNavigate();

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const onUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/cards/update-card/${params.id}`, {
            heading: userForm.heading,
            description: userForm.description,
            address: userForm.address,
        })
        .then((res) => {
            console.log({ status: res.status });
            navigate("/card-list");
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/cards/get-card/${params.id}`)
        .then((res) => {
            setUserForm({
                heading: res.data.data.heading,
                description: res.data.data.description,
                address: res.data.data.address,
            });
        });
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={onUpdate} className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">Heading</label>
                    <input
                        type="text"
                        className="form-input w-full"
                        name="heading"
                        id="heading"
                        value={userForm.heading}
                        onChange={inputsHandler}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <input
                        type="text"
                        className="form-input w-full"
                        name="description"
                        id="description"
                        value={userForm.description}
                        onChange={inputsHandler}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <input
                        type="text"
                        className="form-input w-full"
                        name="address"
                        id="address"
                        value={userForm.address}
                        onChange={inputsHandler}
                    />
                </div>

                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditCard;
