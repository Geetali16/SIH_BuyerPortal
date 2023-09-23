import React, { useState } from 'react';

import Navbar from "./navbar.js";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send the data to a server or perform other actions.
    setSubmitted(true);
    console.log(formData);
  };
  return (
    <div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Mooli&display=swap");

          h1 {
            text-align: center;
            margin-top: 4rem;
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            font-family: "Mooli", sans-serif; /* Use "Mooli" font with a fallback to sans-serif if "Mooli" is unavailable */
          }

          h2 {
            font-family: "Mooli", sans-serif; /* Use "Mooli" font with a fallback to sans-serif if "Mooli" is unavailable */
            // font-size: 1.2rem;
            margin: 3rem 4rem;
            color: green;
          }

          p {
            font-family: "Mooli", sans-serif; /* Use "Mooli" font with a fallback to sans-serif if "Mooli" is unavailable */
            font-size: 1.2rem;
            margin: 3rem 4rem;
          }

          form {
            margin: 2rem auto;
            max-width: 400px;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 3px;
          }

          button {
            background-color: navy;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            cursor: pointer;
          }
        `}
      </style>
      <Navbar />
      <h1>Contact Us</h1>
      <p>
        <center><u>Jaypee Institute of Information Technology, 62</u></center> <br/>
        <center><b> TEAM_11</b></center> <br/>
        <b>Team Members  with their  email Ids </b><br/><br/>
        Geetali Agarwal  &nbsp;&nbsp; geetaliag02@gmail.com <br/>
        Riya Kansal &nbsp;&nbsp;@<br/> 
        Vriti Dawra &nbsp;&nbsp;@<br/>
        Nandini Agrawal&nbsp;&nbsp; @<br/>
        Nehal Jain  &nbsp;&nbsp;@<br/>
        Kashish Garg &nbsp;&nbsp; @<br/>
        <div
          style={{
            marginTop: "2rem",
            alignItems: "center",
            color: "navy"
          }}
        >
          <InstagramIcon /> &nbsp;&nbsp;&nbsp;
          <FacebookIcon /> &nbsp;&nbsp;&nbsp;
          <TwitterIcon />
            <br/><br/><br/>
          <b>Reach out to us via Form -</b>
          {submitted ? (
            <h2> Hurray, Thank you for giving us your feedback! </h2>
          ) : (
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
          )}
        </div>
      </p>
    </div>
  );
}

export default Contact;
