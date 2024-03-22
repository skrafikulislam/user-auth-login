import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // console.log(name, email, phone, message);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Clicked");
  };
  return (
    <div className="form-main">
      <div className="form-content">
        <h1>This Is SignUp Form</h1>
        <form action="">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="">Your Phone</label>
          <input
            type="number"
            placeholder="Your Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <label htmlFor="">Your Message To Us</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </form>
      </div>
      <div className="button">
        <button onClick={handleSubmit}>Click Here To Submit</button>
      </div>
    </div>
  );
};

export default SignUpForm;
