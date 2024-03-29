import React from "react";
import "./projects.scss";
import { data } from "../data";

export default function Index() {
  return (
    <section className="work" id="projects">
      <h3>PROJECTS</h3>

      <div className="gallery">
        {data.map(({ id, name, img, target, live, tags, text }, index) => {
          return (
            <div className="card" key={index}>
              <h4>
                <a href={live} target={target} className="underline">
                  {name}
                </a>
              </h4>
              <div className="image-box">
                <img
                  title={name}
                  src={img[0][0]}
                  alt={"screenshot of " + name + "website"}
                />
              </div>

              <div className="details">
                <p>{text}</p>
                <ul>
                  {tags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* <div className="display-box">
          <div className="display">

            <div className="img-box1">
              {id === 3 || id === 4 ? (
                <img src={img[0][1]} alt="" />
              ) : (
                <iframe
                  src={live}
                  title={name}
                  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
                  allowFullScreen
                  style={{
                    width: "100%",
                    borderRadius: "1px ",
                    pointerEvents: "auto",
                    backgroundColor: "rgb(25, 25, 25)",
                  }}
                ></iframe>
              )}
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
        </div> */}
        {/* <div className='slider-box'>
          <div className='slider'>
            {data.current.map((item, index) => {
              const { img, name } = item;
              return (
                <button
                  key={index}
                  className={`${id === item.id ? ' selected' : ''} img-box `}
                  onClick={() => {
                    setOnDisplay(data.current[index]);
                    console.log(img);
                    // if (id === 3 || id === 4) {
                    //   setImg(img[0][1]);
                    // } else setImg(null);
                  }}>
                  <img
                    title={name}
                    src={img[0][0]}
                    alt={'image of' + name + 'website'}
                  />
                </button>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
