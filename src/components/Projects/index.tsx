import React from 'react';

import './projects.scss';
import ProjectCard from './ProjectCard';

export default function Index() {
  const data: dataProp[] = require('../data.json');

  return (
    <section className='work' id='projects'>
      <h3>PROJECTS</h3>

      <div className='projects-list'>
        {data.map((item, key) => (
          <ProjectCard
            {...item}
            key={key}
            className={key % 2 > 0 ? 'left' : ''}
          />
        ))}
      </div>
    </section>
  );
}

