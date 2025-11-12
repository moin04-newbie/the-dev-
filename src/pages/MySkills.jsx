import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skills from '../components/skillsData';
import CTA from '../components/CTA';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MySkills = () => {
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from('.skill-item', {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: skillsRef });

  return (
    <>
      <div className='bg-black text-white min-h-screen'>
        <div ref={skillsRef} className='main-container py-28 lg:py-40'>
          {/* Header */}
          <div className='mb-16 lg:mb-24 text-center'>
            <h1 className='text-5xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mb-4'>
              Things I'm <span className='text-blue-400'>good at</span>
            </h1>
            <p className='text-lg lg:text-xl text-gray-400'>skills, interests, passion and hobbies</p>
          </div>

          {/* Development Section */}
          <div className='mb-20 lg:mb-32'>
            <div className='border-2 border-white/20 rounded-2xl p-8 lg:p-12 bg-white/5 backdrop-blur-sm'>
              <h2 className='text-3xl lg:text-5xl font-heading font-bold mb-8 lg:mb-12 uppercase tracking-wide'>
                development
              </h2>
              <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6'>
                {skills.development.map((skill, index) => (
                  <div
                    key={index}
                    className='skill-item bg-white rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer group'
                  >
                    <div className={`w-full h-full rounded-lg ${skill.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 p-2`}>
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className='text-black text-xs lg:text-sm font-medium mt-2 text-center'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Designing Section */}
          <div>
            <div className='border-2 border-white/20 rounded-2xl p-8 lg:p-12 bg-white/5 backdrop-blur-sm'>
              <h2 className='text-3xl lg:text-5xl font-heading font-bold mb-8 lg:mb-12 uppercase tracking-wide'>
                designing
              </h2>
              <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6'>
                {skills.designing.map((skill, index) => (
                  <div
                    key={index}
                    className='skill-item bg-white rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer group'
                  >
                    <div className={`w-full h-full rounded-lg ${skill.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 p-2`}>
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className='text-black text-xs lg:text-sm font-medium mt-2 text-center'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  )
}

export default MySkills

