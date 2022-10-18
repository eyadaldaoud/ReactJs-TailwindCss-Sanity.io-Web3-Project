import React from 'react';

// Icons import
import { useState, useEffect } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
//
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import { ethers } from 'ethers'

const Nav = () => {
   
  let htmlToggle = document.getElementById('toggleTheme');
  let getNav = document.getElementById('navul');
 

  const [menuLogo, setMenulogo] = useState(<HiMenu/>)

  const [hidden, setHidden] = useState()
  
  const [themeActive, setTheme] = useState()
  
  const [icon, setIcon] = useState()

  const [isConnected, setConnected] = useState()
  
  const [Account, setAccount] = useState()

  const [balance, setBalance] = useState()

  const [network, setNetwork] = useState()

  useEffect(() => {

    setTheme(localStorage.Theme)

    setHidden(true)
    

    // Save theme changes and logo when the page loads
    localStorage.Theme == 'dark' ? htmlToggle.setAttribute('class', localStorage.Theme) : htmlToggle.removeAttribute('class')
    localStorage.Theme == 'dark' ? document.body.classList.add('darkBg') : document.body.removeAttribute('class')
    localStorage.Theme == 'dark' ? setIcon(<RiSunLine className='text-yellow-400'/>) : setIcon(<RiMoonLine className='text-cyan-300'/>) 
    
   
  }, [])



  // handle the wallet connaction 
  const handleConnect = async () => {
    
    if (window.ethereum){

      const web3 = new Web3(Web3.givenProvider);
      const acc = await web3.eth.requestAccounts();
      setAccount(acc[0])
      setConnected(true)
      const bal = await web3.eth.getBalance(acc[0])
      setBalance(ethers.utils.formatEther(bal).slice(0, 6)) 
      const net = await web3.eth.net.getNetworkType()
      setNetwork(net.toUpperCase())
      console.log(web3.eth.getProof(acc[0]))

      
    } else {
      alert("You need to install MetaMask")
    }


    


}


  
  const handleDisconnect = () => {

    window.location.reload()
 

  }


  return (
  
    <div className='bg-slate-600 dark:bg-slate-900 fixed w-full z-10  maindiv'>
        
          <nav className='bg-slate-600 dark:bg-slate-900 text-cyan-300 dark:text-cyan-500'>

              <ul className='p-2'>
      
                <li  onClick={() => {

                     
                 getNav.classList.toggle('hidden')

                 hidden == true ? setMenulogo(<AiOutlineClose className='anmain-nav-one'/>) : setMenulogo(<HiMenu className='anmain-nav'/>)

                 setHidden(!hidden)
                 

                }} className='text-5xl hover:bg-slate-700 border-2 border-cyan-300 dark:border-cyan-500 rounded-xl hover:rounded-2xl lg:hidden p-2 ease-in-out duration-300 w-fit'>{menuLogo}</li>
         


                <div className='lg:flex hidden' id='navul'>

                <li className='firstthree lg:flex  hover:bg-slate-700 font-bold  border-2  border-cyan-300 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl'><a href='https://github.com/UGoingNoWhereBoy' target={'_blank'}><IoLogoGithub className='text-3xl'/></a></li>
                <div className='md:w-fit w-0'><Link  to='/'><li  className='firstthree lg:flex  hover:bg-slate-700 font-bold  border-2 border-cyan-300 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl'>Home</li></Link></div>
                <div className='md:w-fit w-0'><Link to='/market'><li className='firstthree lg:flex  hover:bg-slate-700 font-bold  border-2 border-cyan-300 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl'>Market</li></Link></div>
              
            
                <div className='lg:flex  ml-auto mr-auto'>

                {isConnected && <li className='lasttwo lg:flex  hover:bg-slate-700 font-bold rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl cursor-pointer'>{Account && <p>Network: {window.ethereum.networkVersion != "137" ? <strong className='text-rose-600'>{network}</strong> : <strong>Polygon</strong>}</p>}</li>}   

                {isConnected && <li  className='lasttwo lg:flex  hover:bg-slate-700 font-bold rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl cursor-pointer'>{Account && <p>Address: {Account.slice(0, 6)}..{Account.slice(36, 42)}</p>}</li>}                

                {isConnected && <li className='lasttwo lg:flex  hover:bg-slate-700 font-bold rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl cursor-pointer'>{Account && <p>Balance: {balance}</p>}</li>}                

                 
                </div>

                
                {!isConnected && <li onClick={handleConnect} className='lasttwo lg:flex  hover:bg-slate-700 font-bold border-2 border-cyan-300 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl cursor-pointer'>Connect Wallet</li>}
                {isConnected && <li onClick={handleDisconnect} className='lasttwo lg:flex  hover:bg-slate-700 font-bold border-2 border-cyan-300 dark:border-cyan-500 rounded-md hover:rounded-xl ease-in-out duration-300 p-2 m-2 text-xl cursor-pointer'>Disconnect</li>}

                
                <li className='lasttwo lg:flex  hover:bg-slate-700 font-bold rounded-2xl hover:rounded-xl ease-in-out duration-300 pt-3 p-2 m-1 text-3xl' onClick={() => 
               
                  { 

                  htmlToggle.classList.toggle('dark')
                  
                  htmlToggle.classList == 'dark' ? localStorage.setItem('Theme', 'dark') : localStorage.setItem('Theme', 'light')
                  htmlToggle.classList == 'dark' ? document.body.classList.add('darkBg') : document.body.removeAttribute('class')
                  htmlToggle.classList == 'dark' ? setIcon(<RiSunLine className='text-yellow-400 anmain'/>) : setIcon(<RiMoonLine className='text-cyan-300 anmain-one'/>) 
                  
                  
                  }}>
                    
                  {icon}
                 
                  </li>
                  </div>
       

                
              </ul>

          </nav>
     
      
    </div>
  )
}


export default Nav;