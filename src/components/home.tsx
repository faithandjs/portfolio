import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import Projects from './Projects';
import Contact from './Contact';

import debs from './images/deba.gif';

import './home.css';
import './sass/style.scss';

export const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  // idea 💡 make the role display the video and on hover, create a cursor that is the video in a circle

  useEffect(() => {
    let ctx = gsap.context(() => {
      const load = gsap.timeline();
      const role = new SplitType('.banner h1', { types: 'chars' }).chars;
      load
        .fromTo(
          'nav',
          {
            yPercent: -100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
          }
        )
        .fromTo(
          role,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
          }
        )
        .to('.gif-box img', {
          opacity: 1,
        });
      const el = document.querySelector('.banner')!;
      const cursor = document.querySelector('.cursor');
      const moveCircle = (e: any) => {
        // console.log(e);
        // e.type !== 'mousemove' && console.log(e);
        gsap.to(cursor, {
          css: {
            left: e.pageX - 50,
            top: e.pageY - 150,
          },
        });
      };

      el.addEventListener('mouseover', () => {
        gsap.to(cursor, {
          scale: 1,
          autoAlpha: 1,
          opacity: 1,
        });

        el.addEventListener('mousemove', moveCircle);
      });

      el.addEventListener('mouseenter', moveCircle);
      el.addEventListener('mouseout', () => {
        gsap.to(cursor, {
          scale: 0.5,
          autoAlpha: 0,
        });
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className='body'>
      <nav>
        <h4>Faith Okogbo</h4>
      </nav>
      <section className='banner'>
        <img src={debs} alt='' className='cursor' />
        <h1>
          FRONTEND <br />
          DEVELOPER
        </h1>
      </section>
      <section className='about'>
        <div className='wrapper'>
          <div>
            <h3>About me</h3>
            <p>
              I have always been fascinated by the ability to transform
              beautiful web designs into actual websites, hence frontend
              development was a natural path for me.
            </p>
            <br />
            <p>I am a skilled web developer with experience in ...</p>
          </div>
          <div>
            <h3>
              skills -&nbsp;
              <a href='okogbo-faith-cv.pdf' download>
                Download CV
              </a>
            </h3>
            <ul className='skills'>
              <li>
                <span className='header'>Languages:&nbsp;</span>
                <span> Javascript, Typescript, CSS, SASS/SCSS.</span>
              </li>
              <li>
                <span className='header'>Libraries/Tools:&nbsp;</span>
                <span>
                  Gatsby Js, Next Js, React, Vue JS, Bootstrap, Git/Github,
                  GSAP, Framer Motion
                </span>
              </li>
              <li>
                <span className='header'>Concepts:&nbsp;</span>
                <span>GraphQL, Redux Toolkit, RESTful APIs, Context API.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Projects />
      <Contact />
    </div>
  );
};

