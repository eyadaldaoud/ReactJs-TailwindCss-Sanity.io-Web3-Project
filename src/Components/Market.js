import { SiEthereum } from 'react-icons/si'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
const Market = () => {

  const [postData, setPost] = useState([])
  const [isPending, setPending] = useState(true)

  useEffect(() => {

      sanityClient.fetch(`*[_type == "product"]{
        title,
        name,
        price,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          
        }
      }`)
          .then((data) => {
            setPost(data)
            setPending(false)})
          .catch((error) => {
            console.log(error)
            setPending('error')
          })
  

  
  }, [])


  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex flex-wrap mt-28 justify-center'>
        {isPending &&<h1 className='text-5xl'><span className="loader2">Fetching Data</span></h1>}
        {!isPending && postData.map((product,index) => (
          <Link to={"/product/" + index} key={index}>
          <div className='animan-market border-2 p-2 m-2 border-teal-400 dark:border-cyan-500 bg-slate-800 rounded-2xl hover:rounded-md hover:shadow-lg ease-in-out duration-300 hover:scale-110' key={index}>

                
                  
                  <img src={product.mainImage.asset.url} className='w-[200px] h-[220px]'/>
                  <p className='text-xl text-teal-400 font-bold  dark:text-cyan-400 flex justify-center m-2'>{product.name}</p>
                  <p className='text-xl text-purple-400 bg-slate-900 rounded-lg dark:text-cyan-400 flex justify-center'>{product.price}<SiEthereum className='text-sm mt-2'/></p>
          </div>
          </Link>
    ))}  
    {isPending == 'error' && <h1 className='flex text-5xl text-red-600'>There was an error fetching api data check your console for more info</h1>}
        </div>
        
    </div>
  )
}

export default Market