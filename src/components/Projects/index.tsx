import React, { useEffect, useRef, useState } from 'react';
import play from '../images/play.png';
import './projects.scss';

export default function Index({}: {}) {
  const data = useRef<dataProp[]>(require('../data.json'));
  const [onDisplay, setOnDisplay] = useState<dataProp>(data.current[0]);
  const [Img, setImg] = useState<null | string>(null);

  const { id, name, img, target, github, live, tags, text } = onDisplay;

  return (
    <section className='work'>
      <h3>PROJECTS</h3>

      <div className='gallery'>
        <div className='display-box'>
          <div className='display'>
            <div className='img-box1'>
              {id === 3 || id === 4 ? (
                <img src={img[0][1]} alt='' />
              ) : (
                <iframe
                  src={live}
                  title={name}
                  frameBorder='0'
                  sandbox='allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin'
                  allowFullScreen
                  style={{
                    width: '100%',
                    borderRadius: '1px ',
                    pointerEvents: 'auto',
                    backgroundColor: 'rgb(25, 25, 25)',
                  }}></iframe>
              )}
            </div>

            <div className='details'>
              <div className='top'>
                <h3>{name}</h3>
                <div className='img-box2'>
                  <a href={live} target={target}>
                    <img src={play} alt='github icon' />
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
        <div className='slider-box'>
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
        </div>
      </div>
    </section>
  );
}

