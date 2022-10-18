import { useState } from 'react'
import { BiShield } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { LightSpeed, Bounce, Fade, Flip } from 'react-reveal';


const ServicesBox = ({title, Info, Icon, Styles, Pstyles}) => {
    
    return (
     
        
        <div className={Styles}>
                  <div className='w-20   flex justify-left'>
                     <h1 className='serviceHead mt-1'>{Icon}<p className={Pstyles}>{title}</p></h1>
                  </div>
               
                  <div className=''> 
                    <p className='ml-4 mt-4 text-center'>{Info}</p>
                  </div>
                
        </div>
        
        
 
    )
}



const Services = () => {


  return (

    <div className='border-cyan-600 bg-slate-400  dark:bg-zinc-900 p-4 pt-12 pb-20'>
        
    <div className='flex justify-center'>
    
    <div className='p-4 border-cyan-600  purple-glass'>
        <LightSpeed top cascade>
        <h1 className='text-teal-200 dark:text-teal-400 text-4xl mb-6 font-bold'>Why you should shop with us</h1>
        </LightSpeed>
        <Fade  right>
        <ServicesBox title={'Security'} Info={"All transactions saved only on the blockchain."}

         Icon={<BiShield  className='text-3xl  text-green-400  ml-2'/>}

         Styles={`servicesShrink flex border-2  w-[450px] m-2 p-2 rounded-2xl  border-green-400 font-extrabold   text-green-400 dark:hover:bg-gray-900 cursor-pointer hover:bg-slate-800 ease-in-out duration-300`}/>
      </Fade >
      




        <Fade  top>
        <ServicesBox  title={'Delivery'} Info={'We get your order ready within minutes.'} 

        Icon={<RiFlashlightLine  className='text-3xl text-yellow-500 ml-2'/>}
        
        Styles={`servicesShrink flex font-extrabold border-2 min-h-[75px] w-[450px] m-2 p-2 rounded-2xl border-yellow-500  text-yellow-500 dark:hover:bg-gray-900 cursor-pointer hover:bg-slate-800 ease-in-out duration-300`}/>
        </Fade>




        <Fade  left>
        <ServicesBox  title={'Fees'} Info={'With polygon network fees are almost 0$.'}

         Icon={<BsCoin  className='text-3xl text-cyan-400 ml-2'/>}

         Styles={`servicesShrink flex border-2 min-h-[75px] w-[450px] m-2 p-2 rounded-2xl font-extrabold border-cyan-400 text-cyan-400 dark:hover:bg-gray-900 cursor-pointer hover:bg-slate-800 ease-in-out duration-300`} Pstyles={`ml-2`}/>
        </Fade>
   </div>

    </div>


    </div>
  )
}

export default Services