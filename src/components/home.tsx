import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import githubImg from "./images/github.png";
import code from "./images/code.png";
import phone from "./images/phone.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import "./sass/style.scss";
import { dataProp } from "../../type";
import play from "./images/play.png";
import Card from "./card";

export const Home = () => {
  const data = useRef<dataProp[]>(require("./data.json"));
  const [onDisplay, setOnDisplay] = useState<dataProp>(data.current[0]);
  const [Img, setImg] = useState<boolean>(true);
  const { id, name, img, target, github, live, tags, text } = onDisplay;

  useEffect(() => {
    console.log(window.self === window.top);
    const frame = document.querySelector("iframe")!;
    // frame.contentWindow!.onload = () => {
    //   // setImg(false);
    // };
  }, [onDisplay]);
  const settingDisplay = (id: number) => {
    setOnDisplay(data.current[id]);
  };
  return (
    <div className="body">
      <section className="introduction">
        <div className="texts">
          <div className="h1">
            <h1>
              <span className="hi">hi, i'm Faith</span>
              <br />
              <span>
                and I'm a <span className="pink">frontend developer</span>
                <span className="wave">👋🏽</span>
              </span>
            </h1>
          </div>
          <div className="text">
            <div className="about">
              I have always been fascinated by the ability to transform
              beautiful web designs into actual websites, hence frontend
              development was a natural path for me.
              <br /> <br />
            </div>
            <div className="services">
              <p className="head">services</p>
              <ul>
                <li>I develop responsive and accessible webpages.</li>
                <li>I manage and maintain websites.</li>
                {/*In my free time, I enjoy reading, watching movies or exercising.
             <li>I manage and maintain websites.</li> */}
              </ul>
            </div>{" "}
            <br />
            <div className="skills">
              <div className="technical">
                <div className="head">technical skills</div>
                <ul>
                  <li>
                    <span className="header">Languages:</span>
                    <span> Javascript, Typescript, CSS, SASS/SCSS.</span>
                  </li>
                  <li>
                    <span className="header">Libraries/Tools:</span>
                    <span>
                      {" "}
                      Gatsby Js, Next Js, React, Bootstrap, Git/Github.
                    </span>
                  </li>
                  <li>
                    <span className="header">Concepts:</span>
                    <span> GraphQL, Redux, RESTful APIs, Context API.</span>
                  </li>
                </ul>
              </div>
              {/* <div className="non-tech">
                <div className="head">Non-technical skills</div>
                <ul>
                  <li className="item">video editing.</li>
                </ul>
              </div> */}
            </div>{" "}
            <br />
          </div>
          <ul className="contact">
            <li>
              <a href="mailto:okogbofaith@gmail.com" target="_blank">
                <img src={email} />
              </a>
            </li>
            <li>
              <a href="tel:+2349043126914" target="_blank">
                <img src={phone} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/okogbo-faith"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/faithandjs" target="_blank">
                <img src={githubImg} />
              </a>
            </li>
          </ul>
        </div>

        <div className="image">
          <img src={code} />
        </div>
      </section>
      <section className="work">
        <h2>portfolio</h2>
        <div className="gallery">
          <div className="display-box">
            <div className="display">
              <div className="img-box1">
                <iframe
                  src={live}
                  title={name}
                  frameBorder="0"
                  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
                  allowFullScreen
                  // scrolling="no"
                  style={{
                    width: "100%",
                    borderRadius: "1px ",
                    pointerEvents: "auto",
                    backgroundColor: "rgb(25, 25, 25)",
                  }}
                ></iframe>
              </div>

              <div className="details">
                <div className="top">
                  <h3>{name}</h3>
                  <div className="img-box2">
                    <a href={live} target={target}>
                      <img src={play} alt="github icon" />
                    </a>
                  </div>
                </div>
                <p>{text}</p>
                <ul>
                  {tags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="slider-box">
            <div className="slider">
              {data.current.map((item, index) => {
                const { img, name } = item;
                return (
                  <img
                    key={index}
                    className={`img-box ${id === item.id ? " selected" : ""} `}
                    title={name}
                    onClick={() => settingDisplay(index)}
                    src={img[0][0]}
                    alt={"image of" + name + "website"}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="cv">
          <a href="okogbo-faith-cv.pdf" download>
            Download CV
          </a>
        </div>
      </section>

      <footer className="contact" id="contact"></footer>
    </div>
  );
};
