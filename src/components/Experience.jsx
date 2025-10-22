import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../utils/constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';
import ExperienceCard from './ExperienceCard';
const Experience = () => {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <motion.div variants={textVariant()}>
        <h2 className="text-cyan-500 font-bold text-5xl text-center mx-auto">
          Wrok Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
    
  );
};

export default SectionWrapper(Experience, 'experience');
