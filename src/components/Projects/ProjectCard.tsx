import React from 'react';

interface prop extends dataProp {
  className?: string;
}

export default function ProjectCard({
  github,
  id,
  img,
  live,
  name,
  tags,
  target,
  text,
  className,
}: prop) {
  return (
    <a className='project-card-wrapper' href={live} target={target}>
      <div className={'project-card ' + className}>
        <div className='text-details'>
          <h2>{name}</h2>
          <ul>
            {tags.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <p>{text}</p>
        </div>
        <div
          style={{ backgroundImage: `url(${img[0][0]})` }}
          className='visual-details'></div>
      </div>
    </a>
  );
}

