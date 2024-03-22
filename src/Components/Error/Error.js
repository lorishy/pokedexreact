import React from "react";
import { Link } from "react-router-dom";
import './Error.css';

export default function Error() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-danger">404</h1>
                    <p className="lead">Oops! Page not found.</p>
                    <Link to="/" className="btn btn-danger">Back to Home</Link>
                </div>
            </div>
        </div>

    );
}
