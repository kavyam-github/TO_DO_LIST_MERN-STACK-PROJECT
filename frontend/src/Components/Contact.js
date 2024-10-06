import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        setSuccessMessage("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-lg">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Send Message
                </button>
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
            </form>
            <footer className="text-center mt-4 bg-dark">
                <p className="text-light">Kavyam Joshi.<br /> B-4, 365</p>
            </footer>
        </div>
    );
}

export default Contact;
