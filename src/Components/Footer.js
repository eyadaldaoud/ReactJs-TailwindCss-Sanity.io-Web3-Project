import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'


const Footer = () => {
  return (
    <div className='flex-grow-1 h-[75px] bg-slate-600 dark:bg-slate-900 text-cyan-300 dark:text-cyan-500 footerquery'>
        <footer>

          


          <div className='flex'>

          <section>
            
                   <div className='flex mt-6 ml-2'>
                        <a href='https://www.linkedin.com/in/eyad-93327b244' target={'_blank'}><FiLinkedin className='text-2xl ml-2 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-600 rounded-md ease-in-out duration-500 hover:rounded-xl'/></a>
                        <a href='https://github.com/UGoingNoWhereBoy' target={'_blank'}><FiGithub className='text-2xl ml-2 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-600 rounded-md ease-in-out duration-500 hover:rounded-xl'/></a>
                        <a href='https://discord.com/users/UGoingNoWhereBoy#1736' target={'_blank'}><SiDiscord className='text-2xl ml-2 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-600 rounded-md ease-in-out duration-500 hover:rounded-xl'/></a>
                   </div>
              </section>


              <section className='flex ml-auto mr-auto flex-col mt-6'>
                   
                   <h1 className='font-extrabold text-xl'>Made with love by UGoingNoWhereBoy</h1>
                 
                    
              </section>
              <section className='flex ml-[120px] mt-6'>
                   
                   <h1 className='font-extrabold text-xl'></h1>
                 
                    
              </section>
         
          
          </div>
           
            
        </footer>
    </div>
  )
}


export default Footer;