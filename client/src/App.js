import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import UpdateUser from './views/UpdateUser';
import UserForm from './components/UserForm';

function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        {/* root => list of users */}
        <Route path="/" element={<Main />} />
        <Route path="/user/details/:id" element={<Details />} removeFromDom={removeFromDom} />
        <Route path="/user/:id/edit" element={<UpdateUser />} />
        <Route path="/user/form" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



