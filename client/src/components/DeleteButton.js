import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
    const { user, userId, successCallback } = props;
    const navigate = useNavigate();

    const deleteUser = (e) => {
        console.log("ID :" + userId);
        axios.delete(`http://localhost:8000/api/user/${userId}`).then((res) => {
            navigate("/");
            successCallback();
        });
    };

    return (
        <>
            <Popup
                trigger={
                    <button className="ml-4 btn btn-large  btn-danger">
                        Adopt {user.name}
                    </button>
                }
                position="right center"
            >
                <div className="bg-light text-black px-1 border border-dark">
                    Are you sure <br />
                    you want to Adopt {user.name} ?<br />
                    <form method="get" action="/">
                        <button
                            onClick={deleteUser}
                            className="mx-4 my-2 btn btn-small btn-danger"
                        >
                            Yse
                        </button>
                        <input
                            type="submit"
                            name="cancel"
                            value="No"
                            className="mx-4 my-2 btn btn-small btn-danger"
                        />
                    </form>
                </div>
            </Popup>
        </>
    );
};

export default DeleteButton;
