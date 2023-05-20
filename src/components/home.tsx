import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import Projects from './Projects';
import Contact from './Contact';

import debs from './images/deba.gif';

import './home.css';
import './sass/style.scss';

export const Home = () => {
  const [menuState, setMenu] = useState(false);

  const removeMenu = () => {
    console.log('', menuState);
    if (menuState) {
      const menu = document.querySelector('.menu')!;
      gsap.to(menu, {
        duration: 1,
        y: -300,
        opacity: 0,
        height: 0,
      });
      !menuState && setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', removeMenu);

    let ctx = gsap.context(() => {
      const load = gsap.timeline();
      const role = new SplitType('.home h1', { types: 'chars' }).chars;
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
        );

      const el = document.querySelector('.home')!;
      // const cursor = document.querySelector('.cursor');
      const cursorImg = document.querySelector('img.cursor ');
      const cursorCircle = document.querySelector('div.cursor');
      const moveCircle = (e: any) => {
        gsap.to(cursorImg, {
          duration: 2,
          css: {
            left: e.pageX + 50,
            top: e.pageY + 50,
          },
        });
        gsap.to(cursorCircle, {
          css: {
            left: e.pageX,
            top: e.pageY - 80,
          },
        });
      };

      el.addEventListener('mouseover', () => {
        gsap.to(cursorImg, {
          scale: 1,
          autoAlpha: 0.6,
          opacity: 0.6,
        });
        gsap.to(cursorCircle, {
          autoAlpha: 0.6,
        });

        el.addEventListener('mousemove', moveCircle);
      });

      el.addEventListener('mouseenter', moveCircle);
      el.addEventListener('mouseout', () => {
        gsap.to(cursorImg, {
          scale: 0.3,
          autoAlpha: 0,
        });
        gsap.to(cursorImg, {
          autoAlpha: 0,
        });
      });
      //
    });

    return () => ctx.revert(); // eslint-disable-next-line
  }, []);
  return (
    <div className='body'>
      <ul className='menu'>
        {['home', 'about', 'projects', 'contact'].map((item, key) => (
          <li key={key}>
            <a href={`#${item}`} className='underline' onClick={removeMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <nav>
        <h4>
          <button
            onClick={(e) => {
              // e.stopPropagation();
              const menu = document.querySelector('.menu')!;

              if (!menuState) {
                gsap.to(menu, {
                  duration: 1,
                  opacity: 1,
                  y: 0,
                  height: '250px',
                });
              } else {
                gsap.to(menu, {
                  duration: 1,
                  y: -250,
                  opacity: 0,
                  height: 0,
                });
              }
              setMenu((p) => !p);
            }}>
            Faith Okogbo
          </button>
        </h4>
      </nav>
      <section className='home' id='home'>
        <div>
          <img src={debs} alt='' className='cursor' />
          <div className='cursor'></div>
        </div>
        <h1>
          FRONTEND <br />
          DEVELOPER
        </h1>
      </section>
      <section className='about' id='about'>
        <div className='wrapper'>
          <div>
            <h3>About me</h3>
            {/* I've always been captivated by the art of bringing stunning web
            designs to life as actual websites and this fascination led me to
            frontend development. */}
            I am a detail-oriented, result-driven front-end developer with over
            2 years of experience in building web applications. Equipped with a
            degree in computer science, my expertise lies in utilizing popular
            front-end frameworks and technologies such as React.js, Vue.js, etc.
            I possess a strong understanding of object-oriented programming
            principles, allowing me to create responsive, feature-rich, and
            scalable interfaces for web applications.
            <br />
            <br />
            {/* Frontend development to me is a rewarding cycle of learning and
            applying knowledge to produce results. While my computer science
            degree has given me a strong foundation in the basics and equipped
            me with valuable skills that I apply in my work, I am always open to
            new challenges and opportunities to learn, grow and expand my
            skillset. */}
          </div>
          <div>
            <h3>
              skills ⎻&nbsp;
              <a href='okogbo-faith-cv.pdf' download className='underline'>
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
                  GSAP, Framer Motion, Tailwind.
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

