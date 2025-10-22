import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { skills } from '../utils/constants';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section className="pb-16 lg:py-24 px-14" id="about">
      <div className="bg-gray-900 p-4 text-white" >
      <motion.div variants={textVariant()}>
        <h2 className="text-cyan-500 font-bold text-5xl text-center mx-auto">
          About Me
        </h2>
      </motion.div>
      <div className="flex w-full">
        <div className="w-1/2 p-2 ml-8">
          <div className="flex flex-wrap gap-4 mt-8 p-4">
            {skills.map((skill) => (
              <div className="bg-gray-800 p-4 rounded-md hover:bg-gray-700">
                {/* <img src={src} alt={skill_name} height={height} width={width} />
                 */}
                <p>{skill.skill_name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-2">
          <p className="p-4 mx-6 mt-8 ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate
          </p>
          <button className="flex px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-500 w-max text-lg text-white font-semibold rounded-lg mt-4 mx-8">
            <a href="Resume_Pradnya.pdf" download="Resume_Pradnya">
              Download Resume
            </a>
            <span className="m-2 mr-0">
              <IoMdDownload />
            </span>
          </button>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default About;
