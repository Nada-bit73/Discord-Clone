import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Update = (props) => {
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const [disable, setDisable] = useState(false);
    const [data, setData] = useState({
        name: "",
        petType: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    });


    const navigate = useNavigate();

    // fetch document by id and fill the fields with the data when open the page
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    // send the new data
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/user/${id}`, data)
            .then(
                (res) => 
                navigate("/")
            )
            .catch((err) => console.log(err));
    };

    function onFieldChange(fieldName, fieldValue) {
        console.log({ fieldName, fieldValue });
        setData({ ...data, [fieldName]: fieldValue });
        if((fieldName === "name" && fieldValue.length < 3) || (fieldName === "petType" && fieldValue.length < 3) || (fieldName === "description" && fieldValue.length < 3) ){
            setErrors(["All inputs must be 3 characters in length !"]);
            setDisable(true);
        }
        if((fieldName === "name" && fieldValue.length > 2)){
            setErrors([]);
            setDisable(false);
        }
        if((fieldName === "petType" && fieldValue.length > 2)){
            setErrors([]);
            setDisable(false);
        }
        if((fieldName === "description" && fieldValue.length > 2)){
            setErrors([]);
            setDisable(false);
        }
    }


    return (
        <Form
            disable={disable}
            errors={errors}
            data={data}
            onSubmit={onSubmitHandler}
            onFieldChange={onFieldChange}
        />
    );
};

export default Update;
