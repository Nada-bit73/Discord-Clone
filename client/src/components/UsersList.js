import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const UsersList = (props) => {
    const { removeFromDom, users } = props;

    return (
        <div className="container mt-4 justify-content-center align-items-center text-center">
            <h1>Pet Shelter</h1>
            <p>These pets are looking for a good home</p>
            <div className="row">
                <div className="span6">
                    <Link to="/user/form" className="mx-3">
                        add a pet to the shelter
                    </Link>
                    <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                    <tr key={i}>
                                        <td>{user.name}</td>
                                        <td>{user.petType} </td>
                                        <td>
                                            <Link
                                                to={`/user/details/${user._id}`}
                                            >
                                                details
                                            </Link>
                                            &nbsp;&nbsp;&nbsp; |
                                            &nbsp;&nbsp;&nbsp;
                                            <Link
                                                to={
                                                    "/user/" +
                                                    user._id +
                                                    "/edit"
                                                }
                                                className="mx-3"
                                            >
                                                edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
