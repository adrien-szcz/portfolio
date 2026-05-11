import { useState } from 'react'

import Language from './components/Language';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

            {/* Nav Bar */}
            <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between font-bold backdrop-blur-sm'>
                <p className='text-2xl p-3'>Adrien Szczepaniak</p>

                <div className='flex gap-3 text-xl *:p-4 *:hover:text-heading'>
                    <Link to='mailto:adrien10019@gmail.com'>Mail</Link>
                    <Link to='https://github.com/adrien-szcz'>GitHub</Link>
                    <Link to='https://www.linkedin.com/in/adrien-szczepaniak/'>Linkedin</Link>
                </div>                
            </nav>

        </BrowserRouter>
        <div className='pt-10 *:p-5 *:*:my-5'>

          <div> 

            <h1 className='font-bold text-4xl'><span>Welcome to my portfolio !</span></h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
          </div>

          <div>

            <h1 className='font-bold text-3xl'><span>I.</span> Skills</h1>

            <Language text='Python' imgSource='python.png'></Language>

          </div>
          
          <div>

            <h1 className='font-bold text-3xl'><span>II.</span> Projects</h1>
          
          </div>
          
          <div>

            <h1 className='font-bold text-3xl'><span>III.</span> About me</h1>
          
          </div>
          <div>

            <h1 className='font-bold text-3xl'><span>III.</span> About me</h1>
          
          </div>
          <div>

            <h1 className='font-bold text-3xl'><span>III.</span> About me</h1>
          
          </div>
          <div>

            <h1 className='font-bold text-3xl'><span>III.</span> About me</h1>
          
          </div>
          <div>

            <h1 className='font-bold text-3xl'><span>III.</span> About me</h1>
          
          </div>

        </div>
    </>
  )
}

export default App
