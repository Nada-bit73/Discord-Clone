import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default (props) => {
    const [errors, setErrors] = useState([]);
    const [disable, setDisable] = useState(true);
    const [data, setData] = useState({
        name: "",
        petType: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    });

    const navigate = useNavigate();

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new user
        
        axios
            .post("http://localhost:8000/api/user/new", data)
            .then((res) => {
                
                console.log(res);
                navigate("/");

            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }

                setErrors(errorArr);
                setDisable(true);
            });
    };

    function onFieldChange(fieldName, fieldValue) {
        console.log({ fieldName, fieldValue });
        setData({ ...data, [fieldName]: fieldValue });
        
    }

    return (
        <Form
            disable={false}
            errors={errors}
            data={data}
            onSubmit={onSubmitHandler}
            onFieldChange={onFieldChange}
        />
    );
};
