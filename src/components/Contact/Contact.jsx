import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Person, Envelope } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_atwpjfa",
        "template_aiaacau",
        form.current,
        "mRx0KQRznslap-Bjc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Thank you!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="col p-8 d-flex flex-wrap justify-content-center align-items-center divTotal">
      <ToastContainer />
      <div className="m-5 col-4 divRes">
        <h3 className="text-white textResponsive">
          You have something I can work on... <br /> Please don't hesite to
          reach out
        </h3>
      </div>
      <form ref={form} onSubmit={sendEmail} className="m-5 formDiv">
        {/* name */}

        <label for="exampleInputEmail1" className="text-white">
          Name
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <Person color="black" />
          </span>
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="inputEmail3"
            placeholder="Name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label for="exampleInputEmail1" className="text-white">
            Email address
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <Envelope color="black" />
            </span>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1" className="text-white">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" value="Send" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
