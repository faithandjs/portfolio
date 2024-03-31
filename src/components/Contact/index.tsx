import React from "react";

import githubImg from "../../assets/github.png";
import phone from "../../assets/phone.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";

import "./contact.scss";
import { data } from "../data";

export default function Index() {
  return (
    <section className="contact" id="contact">
      <h3>Contact me</h3>

      <div className="btn-box">
        <button className="btn">
          <a
            href={`mailto:${data.contact.mail}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="details">
              <span> Email</span> <span>okogbofaith@gmail.com</span>
            </span>

            <img src={email} alt="email icon" />
          </a>
        </button>
        {/* <button className="btn">
          <a href="tel:+2348172994910" target="_blank" rel="noreferrer">
            <span className="details">
              <span> Phone</span>
              <span>+</span>
            </span>
            <img src={phone} alt="phone icon" />
          </a>
        </button> */}
        <button className="btn">
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
            <span className="details">
              <span> LinkedIn</span> <span>Okogbo Faith</span>
            </span>
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </button>
        <button className="btn">
          <a href={data.contact.github} target="_blank" rel="noreferrer">
            <span className="details">
              <span> Github</span>
              <span>faithandjs</span>
            </span>
            <img src={githubImg} alt="github logo" />
          </a>
        </button>
      </div>
    </section>
  );
}
