import React from 'react';

import './projects.scss';
import ProjectCard from './ProjectCard';
import { data } from '../data';

export default function Index() {
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

