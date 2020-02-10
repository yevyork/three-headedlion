import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Contact.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Thanks! We'll get back to you as soon as we can!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
          <div className="contact-container">
              <p>We'd love to hear from you! <br></br>Drop us a <i>lion</i>.</p>
        <form onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          <p>
            <label>
              <input type="text" name="name" value={name} required placeholder='Name'onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" required value={email} placeholder='E-Mail' onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" required placeholder='Message' value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
      );
    }
  }


export default Contact;