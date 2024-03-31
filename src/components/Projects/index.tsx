import React from "react";

import { data } from "../data";

import "./projects.scss";

export default function Index() {
  return (
    <section className="work" id="projects">
      <h3>PROJECTS</h3>

      <div className="gallery">
        {data.projects.map(
          ({ id, name, img, target, live, tags, text }, index) => {
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
                    src={`./assets/${img}`}
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
          }
        )}
      </div>
    </section>
  );
}
