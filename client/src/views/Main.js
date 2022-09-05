import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import axios from "axios";

const Main = () => {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // fetch all Users
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, []);

    const removeFromDom = (userId) => {
        setUsers(users.filter((user) => user._id != userId));
    };

    // the purpose of this is to display the list with the new product after creating it !
    // const onProductCreated = (newProduct) => {
    //     setProduct([...product, newProduct])
    // }

    return (
        <div>
            {loaded && (
                <UsersList users={users} removeFromDom={removeFromDom} />
            )}
        </div>
    );
};

export default Main;
