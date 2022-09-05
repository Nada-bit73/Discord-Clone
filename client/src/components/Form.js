import React from "react";
import { Link } from 'react-router-dom';

const Form = ({ onFieldChange, onSubmit, data , errors , disable }) => {

    return (
        <div className="container mt-4 justify-content-center align-items-center text-center">
            {errors.map((errorMessage, index) => (
                <div className="alert alert-danger" key={index}>
                    <div>{errorMessage}</div>
                </div>
            ))}

            <h1>Pet Shelter</h1>
            <p>Knew a pet needing a home ?</p>
            <div className="row">
                <div className="span6">
                    <form className="form" onSubmit={onSubmit}>

                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <div className="col-4">
                                <label className="form-label">Pet Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={(e) => onFieldChange("name", e.target.value)}
                                    value={data.name}
                                />
                            </div>
                        </div>

                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <div className="col-4">
                                <label className="form-label">Pet Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="petType"
                                    onChange={(e) => onFieldChange("petType", e.target.value)}
                                    value={data.petType}
                                />
                            </div>
                        </div>

                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <div className="col-4">
                                <label className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    onChange={(e) => onFieldChange("description", e.target.value)}
                                    value={data.description}
                                />
                            </div>
                        </div>
               
                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <h3>Skills (Optional)</h3>
                            <div className="col-4">
                                <label className="form-label">Skill 1</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="skillOne"
                                    onChange={(e) => onFieldChange("skillOne", e.target.value)}
                                    value={data.skillOne}
                                />
                            </div>
                        </div>

                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <div className="col-4">
                                <label className="form-label">Skill 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="skillTwo"
                                    onChange={(e) => onFieldChange("skillTwo", e.target.value)}
                                    value={data.skillTwo}
                                />
                            </div>
                        </div>

                        <div className="row mb-3 mt-4 justify-content-center align-items-center text-center">
                            <div className="col-4">
                                <label className="form-label">Skill 3</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="skillThree"
                                    onChange={(e) => onFieldChange("skillThree", e.target.value)}
                                    value={data.skillThree}
                                />
                            </div>
                        </div>
                        
                        <button
                            className="mx-4 my-4 btn btn-large btn-dark"
                            type="submit"
                            disabled={disable}
                        >
                            Submit
                        </button>
                        <Link
                            className="btn btn-large btn-dark"
                            to="/"
                        >
                            go back 
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
