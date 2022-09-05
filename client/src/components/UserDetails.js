import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";

const ProductDetails = (props) => {
    const { user, removeFromDom } = props;
    const [likes, setLikes] = useState(0);
    const [data, setData] = useState({
        name: "",
        petType: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    });

    const [disable, setDisable] = useState(true);

    // fetch document by id and fill the fields with the data when open the page
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${user._id}`)
            .then((res) => {
                setData(res.data);
                setDisable(false);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleOnClick = () => {
        setLikes(likes + 1);
    };
   

    return (
        <div className="container mt-4 justify-content-center align-items-center text-center">
            <h1>Pet Shelter</h1>
            <h3>Details about :{user.name}</h3>
            <div className="row">
                <div className="span6">
                    <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                        <h3>Pet Type: {user.petType}</h3>
                        <h3>Description: {user.description}</h3>
                        <h3>Skills:</h3>
                        <h3>{user.skillOne}</h3>
                        <h3>{user.skillTwo}</h3>
                        <h3>{user.skillThree}</h3>
                    </div>
                    <div className="d-inline">
                        <button
                            className="my-4 btn btn-large btn-success"
                            disabled={disable}
                            type="submit"
                            onClick={() => {
                                handleOnClick(user._id);
                            }}
                        >
                            Like {user.name}
                        </button>
                        <p>Like(s) {likes}</p>
                    </div>

                    <DeleteButton
                        className="mx-3"
                        userId={user._id}
                        user={user}
                        successCallback={() => removeFromDom(user._id)}
                    />
                    <Link className="mx-4 btn btn-large btn-dark" to="/">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
