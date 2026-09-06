import Skills from './components/Skills';
import Projects from './components/Projects';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

            {/* Nav Bar */}
            <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between font-bold backdrop-blur-sm'>
                <p className='text-2xl p-3'>Adrien Szczepaniak</p>

                <div className='flex gap-3 text-xl *:p-4 *:hover:text-text-heading'>
                    <Link to='mailto:szczepaniakadrien@gmail.com'>Mail</Link>
                    <Link to='https://github.com/adrien-szcz'>GitHub</Link>
                    <Link to='https://www.linkedin.com/in/adrien-szczepaniak/'>Linkedin</Link>
                </div>                
            </nav>

        </BrowserRouter>
        <div className='pt-10 *:p-5 *:*:my-5'>

          <div> 

            <h1 className='font-bold text-4xl'><span className='text-text-heading'>Welcome to my portfolio !</span></h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
          </div>

          <div>
            <h1 className='font-bold text-3xl'><span className='text-text-heading'>I.</span> Projects</h1>
          
            <Projects></Projects>
          </div>
          
          <div>
            <h1 className='font-bold text-3xl'><span className='text-text-heading'>II.</span> Skills</h1>

            <Skills></Skills>
          </div>
          
          <div>
            <h1 className='font-bold text-3xl'><span className='text-text-heading'>III.</span> About me</h1>
          
            <p>
              I enjoy turning complex problems into clear, well-designed software. 
              As a Software Engineering student, I have developed a strong interest 
              in Java and object-oriented programming, where I particularly enjoy thinking 
              about how a system should be structured before writing the code itself.
            </p>
              
            <p>
              My projects have given me the opportunity to work across different areas of development, 
              from Java and Python to TypeScript, React, and SQL. Whether I am designing a class hierarchy, 
              handling data, or building an interactive interface, I care about creating software that is 
              clean, maintainable, and purposeful.
            </p>
              
            <p>
              What motivates me most is the process of learning by building. I like taking an idea, breaking 
              it down into smaller problems, experimenting with different approaches, and gradually turning 
              it into something functional. I am constantly looking to strengthen my skills and discover new 
              technologies, while developing a better understanding of the principles behind good software engineering.
            </p>
              
            <p>
              Beyond the technical side, I value curiosity, autonomy, and attention to detail. For me, programming 
              is not only about making things work, but about understanding why they work and finding ways to 
              make them better.
            </p>
          </div>
        </div>
    </>
  )
}

export default App
