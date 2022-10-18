import React from 'react';
import {BiWallet, BiNotification, BiShapePolygon} from 'react-icons/bi';
import {VscRocket} from 'react-icons/vsc';
import {GiPartyPopper} from 'react-icons/gi';
import {MdTrendingUp, MdTrendingDown} from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Carditem = (props) => {
  return <li className='purple-glass border-2 p-2 m-2 flex hover:scale-110 cursor-pointer hover:bg-slate-800 hover:text-teal-600 ease-in-out duration-500'>{props.name}{props.icon}</li>

}


const GetStarted = () => {
   
  const [data, setData] = useState()
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
      
       axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            
            setData(res.data)
            setLoading(false)
      
         
       })
          .catch(error => {
            console.log(error)
      
            setData(error.data)

            setLoading('Error')
          
          })

   
   
      
      }, [])
  


  return (
    
    <div className='bg-slate-400 dark:bg-zinc-900 p-4 flex justify-center'>
         
        <div className='purple-glass border-cyan-600  mt-4 flex justify-center w-fit flex-col p-4'>

            <h1 className='text-teal-200 font-bold dark:text-teal-400 text-4xl'>Getting started</h1>
                  
         
            <div className='flex justify-center text-left '>
                
                <ol className='servicesShrink text-teal-200 dark:text-teal-400 mt-4 text-lg font-bold w-[400px]'>

                    <Carditem name="Connect your wallet" icon={<BiWallet className='mt-1 ml-auto text- xl'/>}/>
                    <Carditem name="Your Metamask wallet should pop up" icon={<BiNotification className='mt-1 ml-auto text-xl'/>}/>
                    <Carditem name="Make sure you're on Matic-network" icon={<BiShapePolygon className='mt-1 ml-auto text-xl'/>}/>
                    <Carditem name="Authorise and Connect it" icon={<VscRocket className='mt-1 ml-auto text-xl'/>}/>
                    <Carditem name="Good job, You're good to go" icon={<GiPartyPopper className='mt-1 ml-auto text-xl'/>}/>

                </ol>

            </div>
            
            <div className='w-[400px] mt-4 text-4xl  rounded-2xl border-teal-400 api-box p-2 blue-glass'>
              {Loading && <span className="loader mt-2"></span>}
              {!Loading && <div className='p-2'>
               <h1 className='text-teal-400 font-extrabold text-5xl'>{data[0].name}</h1>
               <div className='mt-2 text-cyan-400'>Last updated: <strong className='animate-pulse text-emerald-400'>{data[0].last_updated.slice(-12, 16)}</strong></div>
            
                <div className='flex justify-evenly mt-4 flex-wrap p-2'>
                <div>{data[0].price_change_percentage_24h < 0 ?  <div className='text-red-400 dark:text-red-600'>{data[0].current_price.toFixed(2)}$</div> 
                 : <div className='text-green-400 dark:text-green-600'>{data[0].current_price.toFixed(2)}$</div>}</div>
                <div>{data[0].price_change_percentage_24h < 0 ? <div className='text-red-400 dark:text-red-600 flex'>{data[0].price_change_percentage_24h.toFixed(1)}%<MdTrendingDown /></div> :
                 <div className='dark:text-green-600 text-green-400 flex'>{data[0].price_change_percentage_24h.toFixed(2)}%<MdTrendingUp /></div>}
                 </div>
                </div>
               
                </div>}
              {Loading == 'Error' && <h1 className='text-red-600 text-3xl'>There was an error fetching api data, check your console for more details</h1>}
            </div>
        </div>
    </div>
  )
}

export default GetStarted;