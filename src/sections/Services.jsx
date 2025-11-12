import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className='main-container pb-8 lg:pb-12 flex justify-between items-end'>
          <h3>Services in Detail</h3>
          <Link to="/skills" className="btn-light uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg">
            My Skills
          </Link>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Interactive Web Design & UI/UX
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                  Crafting modern, intelligent, and user-focused websites with clean layouts, thoughtful typography, and smooth interactions. I combine design and technology to create digital experiences that feel alive, visually stunning, and deeply engaging.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Web Development
              </h2>
            </div>    

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                  Currently expanding my skills in Web development — exploring custom themes, dynamic product layouts, and performance optimization. I'm focused on blending flexibility with my interactive frontend style to build engaging, conversion-focused stores.
              </p>
            </div>

          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                  Creative Branding & Digital Identity
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                  Designing strong brand identities through storytelling, motion, and visual design that connect with audiences. From logos to complete digital systems, I focus on creating brands that feel consistent, expressive, and memorable.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services