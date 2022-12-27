import "./style.scss";
import { Label, Input, Button } from "reactstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  // Form Config if we change the email service

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8i7mg7o",
        "template_w6zt44l",
        form.current,
        "FyjBH9k5lsXFtabIu"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email Sent");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-me" id="contact">
      <h2 className="contact-me-title">Contact Me</h2>
      <form ref={form} className="contact-me-form">
        <div className="form-name">
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="user_name"
            placeholder="your name"
            type="text"
            required
            onChange={(e) => {
              handleName(e);
            }}
          />
        </div>
        <div className="form-email">
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="user_email"
            placeholder="your email"
            type="email"
            required
            onChange={(e) => {
              handleEmail(e);
            }}
          />
        </div>
        <div className="form-textarea">
          <Label for="text">Message</Label>
          <Input
            id="textArea"
            name="message"
            type="textarea"
            onChange={(e) => {
              handleMessage(e);
            }}
          />
        </div>
        {name && email && message ? (
          <Button
            className="contact-me-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="contact-me-btn"
            onClick={(e) => handleSubmit(e)}
            disabled
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default ContactMe;
