import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import CSS file
import "@fortawesome/fontawesome-free/css/all.css";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setResult("Sending....");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kodamharish.pythonanywhere.com/it_zone_send_mail",
        {
          to_email: `${formData.email}`,
          user_subject: `Confirmation Message from IT Zone`,
          admin_subject: "Enquiry from customer",
          mobile: `${formData.phone}`,
          name: `${formData.name}`,
          // Enclosed in backticks for template literals
          message: `${formData.message}`, // Enclosed in backticks for template literals
        }
      );
      setResult("Form Submitted Successfully");
      // alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      // alert("Failed to send message. Please try again later.");
      setResult(error);
    }
  };

  return (
    <div className="contact-container" style={{ marginTop: "100px" }}>
      <div className="contact-section" style={{ textAlign: "left" }}>
        <div className="contact-info">
          <h3 className="text-center">Reach Us</h3>
          <br />
          <div className="info-item">
            <h4>
              <a href="tel:8861796976" style={{ textDecoration: "none" }}>
                <i className="fas fa-phone"></i> 8861796976
              </a>
            </h4>
            <br />
          </div>
          <div className="info-item">
            <h4>
              <a
                href="mailto:info@it-zone.in"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-envelope"></i> info@it-z
                <span style={{ color: "#bd0b0b" }}>o</span>ne.in
              </a>
            </h4>
            <br />
          </div>
          <div className="info-item">
            <h4>
              <a
                href="https://maps.app.goo.gl/d1K48MBZf6ktAY5T9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-map-marker-alt"></i> IT-Z
                <span style={{ color: "#bd0b0b" }}>O</span>NE,
                Auto Tower, J. C Road,
                <br />
                <span style={{ marginLeft: "26px" }}> Bengaluru 560002.</span>
              </a>
            </h4>
            <br />
            <span></span>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="text-center">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                id="name"
                type="text"
                margin="dense"
                variant="standard"
                label="Name"
                name="name"
                color="warning"
                value={formData.name}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </div>
            <div className="form-group">
              <TextField
                id="email"
                type="email"
                margin="dense"
                variant="standard"
                label="Email"
                name="email"
                color="warning"
                value={formData.email}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </div>
            <div className="form-group">
              <TextField
                id="phone"
                type="tel"
                margin="dense"
                variant="standard"
                label="Phone"
                name="phone"
                color="warning"
                value={formData.phone}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </div>
            <div className="form-group">
              <TextField
                id="message"
                label="Enter your message"
                margin="dense"
                name="message"
                multiline
                rows={4}
                defaultValue=""
                color="warning"
                variant="standard"
                value={formData.message}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </div>

            {/* <Button variant="contained" sx={{ width: "auto" }}>
                Submit
              </Button> */}
            <div className="custom-button-container">
              <Button
                variant="contained"
                style={{
                  background:
                    "linear-gradient(to bottom right, #007bff, #ff073a)",
                  color: "white",
                }}
                className="custom-button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            <span style={{ color: "#5b5bf0" }}>{result}</span>
          </form>
        </div>
      </div>
      <div className="map">
        {/* Add your Google Maps component here */}
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1948484614027!2d77.5829783!3d12.9593803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e714f6f185%3A0xe595c218e966697e!2sAuto%20Tower!5e0!3m2!1sen!2sin!4v1714993188457!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
