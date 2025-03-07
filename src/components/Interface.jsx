import { ValidationError, useForm } from "@formspree/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import TechCircle3D from "./Tech";
import { BallCanvas } from './canvas';
import { programming, framework, back, softwares } from '../constants';

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <div className="mb-8 md:mb-16"></div>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0 text-white">
        Hello, I'm
        <br />
        <span className="px-1 italic text-yellow-300">Saad AFIFI</span>
      </h1>
      <motion.p
        className="text-lg text-gray-200 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I am a Software and Data Engineering student,
        <br />
        passionate about building innovative applications.
      </motion.p>
      <div className="flex gap-6 mt-4 md:mt-16">
        <motion.button
          onClick={() => setSection(3)}
          className="bg-yellow-500 text-blue-900 py-4 px-8 
          rounded-lg font-bold text-lg transition-colors duration-300 hover:bg-yellow-400"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
        <motion.a
          href="/projects/AFIFI_CV.pdf"
          download
          className="border-2 border-white text-white py-4 px-8 
          rounded-lg font-bold text-lg transition-colors duration-300 hover:bg-white hover:text-blue-800"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2.2,
          }}
        >
          Download Resume
        </motion.a>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "Python / Data Science",
    level: 90,
  },
  {
    title: "Java / Spring Boot",
    level: 85,
  },
  {
    title: "JavaScript / React",
    level: 80,
  },
  {
    title: "SQL / Database Management",
    level: 75,
  },
  {
    title: "Machine Learning",
    level: 70,
  },
];

const languages = [
  {
    title: "🇲🇦 Arabic",
    level: 100,
  },
  {
    title: "🇬🇧 English",
    level: 85,
  },
  {
    title: "🇫🇷 French",
    level: 75,
  },
];

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Technologies groupées par catégorie
  const technologiesGroups = [
    {
      title: 'Programming Languages',
      items: programming,
    },
    {
      title: 'Framework',
      items: framework,
    },
    {
      title: 'Backend',
      items: back,
    },
    {
      title: 'Softwares',
      items: softwares,
    },
  ];

  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-8 text-center">Skills</h2>
        
        {/* Three column layout for desktop with empty center */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left column - Skills and Languages */}
          <div className="w-full md:w-1/3 md:pr-6">
            {/* Skills bars */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div className="w-full" key={index}>
                    <motion.div
                      className="flex justify-between items-center mb-2"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 0.5 + index * 0.1,
                          },
                        },
                      }}
                    >
                      <h3 className="text-lg font-bold text-white">{skill.title}</h3>
                      <span className="text-yellow-300 font-mono text-sm">{skill.level}%</span>
                    </motion.div>
                    <div className="h-2 w-full bg-blue-900 rounded-full mt-2 overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{
                          scaleX: 0,
                          originX: 0,
                        }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: {
                              duration: 1,
                              delay: 0.5 + index * 0.1,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lng, index) => (
                  <div className="w-full" key={index}>
                    <motion.div
                      className="flex justify-between items-center mb-2"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.1,
                          },
                        },
                      }}
                    >
                      <h3 className="text-lg font-bold text-white">{lng.title}</h3>
                      <span className="text-yellow-300 font-mono text-sm">{lng.level}%</span>
                    </motion.div>
                    <div className="h-2 w-full bg-blue-900 rounded-full mt-2 overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full"
                        style={{ width: `${lng.level}%` }}
                        initial={{
                          scaleX: 0,
                          originX: 0,
                        }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: {
                              duration: 1,
                              delay: 1 + index * 0.1,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Empty center column */}
          <div className="hidden md:block md:w-1/3">
            {/* This column is intentionally left empty */}
          </div>
          
          {/* Right column - Technology balls */}
          <div className="w-full md:w-1/3 md:pl-6">
            {technologiesGroups.map((techGroup, groupIndex) => (
              <motion.div 
                key={techGroup.title}
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { 
                    duration: 0.8,
                    delay: 0.2 * groupIndex 
                  }
                }}
                className="mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">{techGroup.title}</h3>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {techGroup.items.map((tech) => (
                    <motion.div 
                      key={tech.name} 
                      className="w-16 h-16 md:w-24 md:h-24"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.1 }
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-full h-5/6">
                        <BallCanvas icon={tech.icon} />
                      </div>
                      <p className="text-center text-white text-xs mt-1">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll button */}
        <div className="hidden md:block absolute bottom-10 right-10">
          <a href="#">
            <div className="w-[50px] h-[50px] rounded-3xl border-4 border-yellow-300 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: isMobile ? [0, 3, 0] : [0, 15, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="w-3 h-3 rounded-full bg-yellow-300 mb-1"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};


const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="text-yellow-300 hover:text-yellow-400 transition-colors font-medium"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300">Projects</h2>
        <button
          className="text-yellow-300 hover:text-yellow-400 transition-colors font-medium"
          onClick={nextProject}
        >
          Next →  
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mrbpzaey");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-300">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-blue-900 bg-opacity-70 shadow-lg w-96 max-w-full border border-blue-700">
        {state.succeeded ? (
          <p className="text-white text-center">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-white block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 bg-blue-800 text-white shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 p-3"
            />
            <label
              htmlFor="email"
              className="font-medium text-white block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 bg-blue-800 text-white shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 p-3"
            />
            <ValidationError
              className="mt-1 text-red-300"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="message"
              className="font-medium text-white block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 bg-blue-800 text-white shadow-sm ring-1 ring-inset ring-blue-600 placeholder:text-blue-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 p-3"
            />
            <ValidationError
              className="mt-1 text-red-300"
              errors={state.errors}
            />
            <div className="flex gap-4 mt-8">
              <button
                disabled={state.submitting}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold text-lg transition-colors duration-300"
                type="submit"
              >
                Submit
              </button>
              <a
                href="/projects/AFIFI_CV.pdf"
                download
                className="border-2 border-white hover:bg-white hover:text-blue-800 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
};