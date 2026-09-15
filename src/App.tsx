import Cube from './components/Cube';
import Projects from './components/project/Projects';

import { BrowserRouter, Link } from 'react-router-dom';
import Skills from './components/skill/Skills';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>

      <BrowserRouter>
        {/* Nav Bar */}
        <nav className='
          fixed top-0 left-0 w-full z-50
          font-bold font-heading
          backdrop-blur-sm
        '>
          <div className='flex items-center justify-between'>

            <p className='text-2xl p-3'>Adrien Szczepaniak</p>

            {/* Desktop Nav Bar */}
            <div className='
              hidden md:flex gap-3 text-2xl *:p-4 :hover:text-text-heading
            '>
              <Link to='mailto:szczepaniakadrien@gmail.com'>Mail</Link>
              <Link to='https://github.com/adrien-szcz'>GitHub</Link>
              <Link to='https://www.linkedin.com/in/adrien-szczepaniak/'>Linkedin</Link>
            </div>

            {/* Mobile Nav Bar */}
            <button 
              className="md:hidden text-3xl px-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '×' : '☰'}
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className='
              md:hidden flex flex-col items-end
              gap-2 px-5 pb-5 text-xl
            '>
              <li><Link to='mailto:szczepaniakadrien@gmail.com'>Mail</Link></li>
              <li><Link to='https://github.com/adrien-szcz'>GitHub</Link></li>
              <li><Link to='https://www.linkedin.com/in/adrien-szczepaniak/'>Linkedin</Link></li>
            </ul>
          )}

        </nav>
            
        </BrowserRouter>


      {/* Intro */}
      <div className='min-h-svh'>
        <h1 className='font-extrabold font-heading text-6xl text-center lg:text-left pt-30 lg:pt-50 mx-20'>
          <span className='text-text-heading'>Curious by nature. Engineer by choice.</span>
        </h1>

        <div className='flex items-center justify-between lg:gap-20 flex-col lg:flex-row m-15 lg:m-30'>

          <div className='w-full lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-10'>
              Software Developer
            </h2>

            <p className='pl-5'>
              I build clean, well-structured software, with a focus on thoughtful design and practical solutions.

              My main background is in Java and object-oriented programming, while my projects have allowed me 
              to explore different technologies and areas of development.
            </p>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center translate-10 scale-70 lg:scale-100'>
            <Cube></Cube>
          </div>

        </div>

      </div>

      {/* Content*/}
      <div className='*:p-5'>

        {/* Projects */}
        <div>
          <h1 className='font-bold text-3xl font-heading'>
            <span className='text-text-heading'>I.</span> Projects
          </h1>

          <Projects></Projects>
        </div>

        {/* Skills */}
        <div>
          <h1 className='font-bold text-3xl font-heading'>
            <span className='text-text-heading'>II.</span> Skills
          </h1>

          <Skills></Skills>
        </div>

        {/* About Me */}
        <div>
          <h1 className='font-bold text-3xl font-heading'>
            <span className='text-text-heading'>III.</span> About me
          </h1>

            <div className='flex flex-wrap justify-center items mt-5 gap-1 *:mt-8 *:w-[60%]'>

              <p>   
                I am currently a third-year Computer Science student at the IUT 
                of Bordeaux, where I have developed a strong interest in 
                software development and engineering. After completing my degree, 
                I plan to pursue an Engineering degree to continue my studies and 
                reach a Bac+5 level.
              </p>    

              <p>   
                I enjoy turning complex problems into clear, well-designed 
                software. I have developed a particular interest in software 
                architecture and object-oriented programming, especially in 
                thinking about how a system should be structured before writing 
                the code itself.
              </p>    

              <p>   
                Beyond the technical side, I value curiosity, autonomy, and 
                attention to detail. For me, programming is not only about making 
                things work, but about understanding why they work and finding 
                ways to make them better.
              </p>    

            </div>

        </div>

        {/* Footer */}
        <div className='pt-10'>
          <p className='text-sm text-right opacity-70'>
            © 2026 Adrien Szczepaniak. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
