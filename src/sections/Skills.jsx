import React, { useRef } from 'react'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import skills from '../components/skillsData'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Skills = () => {
  const skillsRef = useRef(null)

  useGSAP(() => {
    gsap.from('.skill-item-home', {
      opacity: 0,
      y: 40,
      stagger: 0.04,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: skillsRef })

  return (
    <div className='bg-black text-white'>
      <div ref={skillsRef} className='main-container py-24 lg:py-36'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between mb-12 lg:mb-16'>
          <div>
            <h3 className='text-white/70 mb-4'>My Skills</h3>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] max-w-3xl'>Things I'm <span className='text-blue-400'>good at</span></h2>
            <p className='text-lg lg:text-xl text-white/60 mt-4 max-w-2xl'>A blend of development expertise and creative design tools I use to craft immersive, high-performing digital experiences.</p>
          </div>
          <Link to="/skills" className="btn-light uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-3 rounded-full">
            View All Skills
          </Link>
        </div>

        <div className='space-y-16 lg:space-y-20'>
          <div>
            <h4 className='inline-block px-6 py-2 border border-white/10 rounded-full uppercase tracking-[0.3em] text-sm mb-8'>development</h4>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6'>
              {skills.development.map((skill, index) => (
                <div
                  key={skill.name}
                  className='skill-item-home bg-white rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer group'
                >
                  <div className={`w-full h-full rounded-lg ${skill.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 p-2`}>
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className='text-black text-xs lg:text-sm font-medium mt-2 text-center'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className='inline-block px-6 py-2 border border-white/10 rounded-full uppercase tracking-[0.3em] text-sm mb-8'>designing</h4>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6'>
              {skills.designing.map((skill) => (
                <div
                  key={skill.name}
                  className='skill-item-home bg-white rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer group'
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
  )
}

export default Skills
