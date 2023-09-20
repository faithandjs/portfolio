import React from 'react';

import githubImg from '../images/github.png';
import phone from '../images/phone.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';

import './contact.scss';

export default function Index() {
  return (
    <section className='contact' id='contact'>
      <h3>Contact me</h3>
      {/* <ul>
        <li>
          <a
            href='mailto:okogbofaith@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <img src={email} alt='email icon' />

          </a>
        </li>
        <li>
          <a href='tel:+2348172994910' target='_blank' rel='noreferrer'>
            <img src={phone} alt='phone icon' />
            <span>+2348172994910</span>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/okogbo-faith'
            target='_blank'
            rel='noreferrer'>
            <img src={linkedin} alt='linkedin logo' />
            <span>Okogbo Faith</span>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/faithandjs'
            target='_blank'
            rel='noreferrer'>
            <img src={githubImg} alt='github logo' />
           
          </a>
        </li>
      </ul> */}

      <div className='btn-box'>
        <button className='btn'>
          <a
            href='mailto:okogbofaith@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <span className='details'>
              <span> Email</span> <span>okogbofaith@gmail.com</span>
            </span>

            <img src={email} alt='email icon' />
          </a>
        </button>
        <button className='btn'>
          <a href='tel:+2348172994910' target='_blank' rel='noreferrer'>
            <span className='details'>
              <span> Phone</span>
              <span>+2348172994910</span>
            </span>
            <img src={phone} alt='phone icon' />
          </a>
        </button>
        <button className='btn'>
          <a
            href='https://www.linkedin.com/in/okogbo-faith'
            target='_blank'
            rel='noreferrer'>
            <span className='details'>
              <span> LinkedIn</span> <span>Okogbo Faith</span>
            </span>
            <img src={linkedin} alt='linkedin logo' />
          </a>
        </button>
        <button className='btn'>
          <a
            href='https://github.com/faithandjs'
            target='_blank'
            rel='noreferrer'>
            <span className='details'>
              <span> Github</span>
              <span>faithandjs</span>
            </span>
            <img src={githubImg} alt='github logo' />
          </a>
        </button>
      </div>
    </section>
  );
}

