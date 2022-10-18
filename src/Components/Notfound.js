import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex justify-center mt-48 flex-col'>
            
            <div className='text-9xl flex justify-center text-cyan-600 dark:text-cyan-500'>
                <FiAlertTriangle />
            </div>
            <div className='flex justify-center flex-col p-2'>

            <h1 className='text-sky-900 dark:text-cyan-400 text-5xl'>Sorry! this page doesn't exist</h1>
            <div className='flex justify-center'>
                <Link to='/'><button className='hover:bg-slate-500 text-3xl font-extrabold  border-4 text-sky-900 dark:text-cyan-400 border-sky-900 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 mt-10'>
                    Go Back
                </button></Link>
            </div>

                <span className="loader4 "></span>
            
            </div>

  
        </div>
       
    </div>
  )
}

export default Notfound;