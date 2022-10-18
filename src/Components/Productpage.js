import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SiEthereum } from 'react-icons/si';
import sanityClient from '../client.js'
import Notfound from './Notfound.js';
import Web3 from 'web3';
import { ethers } from 'ethers';

const Productpage = () => {

  const { id } = useParams()
  
  const [postData, setPost] = useState([])
  const [isPending, setPending] = useState(true)

  useEffect(() => {

      sanityClient.fetch(`*[_type == "product"]{
        title,
        name,
        price,
        slug,
        des,
        author,
        mainImage{
          asset->{
            _id,
            url
          },
        
        },
        authimg{
          asset->{
            _id,
            url
          },
        },
     
        
      }`)
          .then((data) => {
            setPost(data)
            // check if there is an item with that id before rendring the page///
            for (let i = 0; i < data.length; i++) {
              if(data[i] <= data[id]){
                
                setPending(false)
              
              } else {
                setPending('No data')
              }

              }
            }
            )
          .catch((error) => {
            console.log(error)
            setPending('error')
          })
  
  
          
  }, [])

  const makeTransactionHandler = () => {
   

  }


  return (
    
    <div className='flex flex-col min-h-screen'>


    <div className='mt-32 p-2 mb-20'>
      
    {isPending === 'No data' && <Notfound />}

    {isPending == true && <h1 className='text-5xl'><span className="loader2">Fetching Data</span></h1>}
    
        {!isPending && 
        
              <div className='infobox flex justify-center p-4 animan-product-page'>
           
                   <div className='border-4 dark:border-indigo-500 border-slate-800  flex flex-col rounded-2xl m-2'>  

                    <img src={postData[id].mainImage.asset.url} className="rounded-xl lg:w-[500px] h-[520px] min-h-full min-w-[250px]"/>

               
                    </div>
                  <div className='flex text-left w-[760px] border-4 rounded-2xl border-zinc-900 dark:border-indigo-500 shrink-p'>
                      <div className='flex flex-col dark:bg-slate-900 bg-zinc-900 rounded-xl w-full'>
                      
                        <h1 className='text-6xl text-indigo-600  m-4 font-family-title'>{postData[id].name.toUpperCase()}</h1>
                    
                        <p className='text-lg text-teal-300 ml-4 font-family-p'>{postData[id].des}</p>
                        <p className='text-3xl  text-indigo-600 dark:text-purple-600 ml-4 mt-auto flex font-family-price'>Price: {postData[id].price}<SiEthereum className='text-xl mt-2'/></p>
                        <div className='text-fuchsia-500 ml-4 mt-auto text-center flex border-2 w-fit rounded-xl p-2 border-fuchsia-500 font-family-price'><h2>Author: {postData[id].author}</h2></div>
                        <div className='mb-4 ml-2 mt-auto'>
                        <button onClick={makeTransactionHandler} className='hover:w-[225px]  w-[175px] m-2 text-2xl text-teal-300 border-teal-300 border-2 rounded-2xl p-2 dark:text-teal-400 dark:border-teal-400 bg-slate-900 hover:bg-slate-800 ease-in-out duration-300 hover:font-family-price'>Buy Now</button>
                        </div>
                  </div>   

                </div>

                 
                 
              </div>
               
          

        }
    {isPending == 'error' && <h1 className='flex text-5xl text-red-600'>There was an error fetching api data check your console for more info</h1>}
        </div> 
   
    </div>
    
  )
}

export default Productpage;