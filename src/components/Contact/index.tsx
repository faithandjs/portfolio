import React, { useEffect, useRef, useState } from 'react';
import githubImg from '../images/github.png';
import phone from '../images/phone.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import './contact.scss';

export default function Index({}: {}) {
  return (
    <section className='contact' id='contact'>
      <h3>Contact me</h3>
      <ul>
        <li>
          <a href='mailto:okogbofaith@gmail.com' target='_blank'>
            <img src={email} />
            <span>okogbofaith@gmail.com</span>
          </a>
        </li>
        <li>
          <a href='tel:+2348172994910' target='_blank'>
            <img src={phone} />
            <span>+2348172994910</span>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/okogbo-faith' target='_blank'>
            <img src={linkedin} />
            <span>Okogbo Faith</span>
          </a>
        </li>
        <li>
          <a href='https://github.com/faithandjs' target='_blank'>
            <img src={githubImg} />
            <span>faithandjs</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

