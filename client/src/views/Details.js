import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const Detail = (props) => {
    const { removeFromDom } = props;
    const [user, setUser] = useState({});
    const { id } = useParams();

    // fetch one user
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${id}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.error(err));
    }, []);

    return <UserDetails user={user} removeFromDom={removeFromDom} />;
};

export default Detail;
