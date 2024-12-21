import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [passwordStrength, setPasswordStrength] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === "password1") {
            validatePasswordStrength(e.target.value);
        }

        // Clear error messages on input change
        setError(null);
        setSuccessMessage(null);
    };

    const validatePasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength("Weak");
        } else if (password.length >= 6 && !/[A-Z]/.test(password)) {
            setPasswordStrength("Medium");
        } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            setPasswordStrength("Strong");
        } else {
            setPasswordStrength(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password1 !== formData.password2) {
            setError("Passwords do not match.");
            return;
        }

        if (isLoading) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
            console.log("Success!", response.data);
            setSuccessMessage("Registration successful! You can now log in.");
            setFormData({ username: "", email: "", password1: "", password2: "" });
            setPasswordStrength(null);
        } catch (error) {
            console.log("Error during registration!", error.response?.data);
            if (error.response && error.response.data) {
                Object.keys(error.response.data).forEach((field) => {
                    const errorMessages = error.response.data[field];
                    if (errorMessages && errorMessages.length > 0) {
                        setError(errorMessages[0]);
                    }
                });
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            <h2>Register:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password1">Password:</label>
                <input
                    type="password"
                    name="password1"
                    id="password1"
                    value={formData.password1}
                    onChange={handleChange}
                    required
                />
                {passwordStrength && <p>Password strength: {passwordStrength}</p>}

                <label htmlFor="password2">Confirm Password:</label>
                <input
                    type="password"
                    name="password2"
                    id="password2"
                    value={formData.password2}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
}
