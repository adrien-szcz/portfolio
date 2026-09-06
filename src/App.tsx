import Skills from './components/Skills';
import Projects from './components/Projects';

import { BrowserRouter, Link } from 'react-router-dom';

function App() {

  return (
    <>
      {/* Nav Bar */}
      <BrowserRouter>
        <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between font-bold backdrop-blur-sm'>
          <p className='text-2xl p-3'>Adrien Szczepaniak</p>

          <div className='flex gap-3 text-xl *:p-4 *:hover:text-text-heading'>
            <Link to='mailto:szczepaniakadrien@gmail.com'>Mail</Link>
            <Link to='https://github.com/adrien-szcz'>GitHub</Link>
            <Link to='https://www.linkedin.com/in/adrien-szczepaniak/'>Linkedin</Link>
          </div>
        </nav>
      </BrowserRouter>

      {/* Main Content*/}
      <div className='pt-10 *:p-5 *:*:my-5'>

        {/* Inro */}
        <div className='*:mt-10 mx-15'>
          <h1 className='font-bold text-6xl text-center lg:text-left'><span className='text-text-heading'>Welcome to my portfolio !</span></h1>

          <h2>
            Software Developer
          </h2>
          <p>
            I build clean, well-structured software, with a focus on thoughtful design and practical solutions.

            My main background is in Java and object-oriented programming, while my projects have allowed me 
            to explore different technologies and areas of development.
          </p>

        </div>

        {/* Projects */}
        <div>
          <h1 className='font-bold text-3xl'><span className='text-text-heading'>I.</span> Projects</h1>

          <Projects></Projects>
        </div>

        {/* Skills */}
        <div>
          <h1 className='font-bold text-3xl'><span className='text-text-heading'>II.</span> Skills</h1>

          <Skills></Skills>
        </div>

        {/* About Me */}
        <div>
          <h1 className='font-bold text-3xl'><span className='text-text-heading'>III.</span> About me</h1>

            <p>   
              I am currently a third-year Software Engineering student at the IUT of Bordeaux, where I 
              have developed a strong interest in software development and engineering. After completing 
              my degree, I plan to pursue a Master's degree or an Engineering degree to continue my studies 
              and reach a Bac+5 level.
            </p>    

            <p>   
              I enjoy turning complex problems into clear, well-designed software. I have developed a 
              particular interest in software architecture and object-oriented programming, especially in 
              thinking about how a system should be structured before writing the code itself.
            </p>    

            <p>   
              What motivates me most is learning by building. I enjoy breaking ideas down into smaller 
              problems, experimenting with different approaches, and gradually turning them into something 
              functional and maintainable.
            </p>    

            <p>   
              Beyond the technical side, I value curiosity, autonomy, and attention to detail. For me, 
              programming is not only about making things work, but about understanding why they work and 
              finding ways to make them better.
            </p>    

        </div>
      </div>
    </>
  )
}

export default App
