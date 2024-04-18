import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CardList() {
    const [userForm, setUserForm] = useState([]);

    // Function to delete a card
    const deleteCard = (_id) => {
        axios.delete(`http://localhost:4000/cards/delete-card/${_id}`)
        .then(() => {
            // If deletion is successful, update the state to reflect the changes
            setUserForm(prevState => prevState.filter(user => user._id !== _id));
            console.log("Data successfully deleted");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // Fetch data from the server when the component mounts or when userForm changes
    useEffect(() => {
        axios.get("http://localhost:4000/cards/")
        .then((res) => {
            setUserForm(res.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container mx-auto  ">
            <table className="w-full bg-white border border-gray-200 rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th scope='col' className="px-6 py-3">#id</th>
                        <th scope='col' className="px-6 py-3">Heading</th>
                        <th scope='col' className="px-6 py-3">Description</th>
                        <th scope='col' className="px-6 py-3">Address</th>
                        <th scope='col' className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {userForm.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <th scope='row' className="px-6 py-4">{user._id}</th>
                            <td className="px-6 py-4">{user.heading}</td>
                            <td className="px-6 py-4">{user.description}</td>
                            <td className="px-6 py-4">{user.address}</td>
                            <td className="px-6 py-4 flex justify-center space-x-4">
                                <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" to={`/edit-card/${user._id}`}>Edit</Link>
                                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => deleteCard(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CardList;
