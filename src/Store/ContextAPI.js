import React, { useEffect, useState } from 'react'

export const ContextAPI=React.createContext();
const CtxProvider= (props)=>{
    const [cartItem,setCartItem]=useState([]);
    //API function
  const [movies,setMovies]=useState([]);
  //Laoding
  const [isLoading,setLoading]=useState(false);
  
  async function fetchMoviesHandler()
  {
    setLoading(true);
   const response=await fetch('https://swapi.dev/api/films')
   const data=await response.json();
   
      const transformedMovies = data.results.map(moviesData=>{
        return {
          id:moviesData.episode_id,
          title:moviesData.title,
          openingText:moviesData.opening_crawl,
          releaseDate:moviesData.release_date
        };
      });
      setLoading(false);
      setMovies(transformedMovies);
      console.log(transformedMovies);
   
   
  }
    const addToCartHandler=(item)=>{
        const existingItem=cartItem.find((itm)=>itm.id === item.id);
        if(existingItem)
        {
            existingItem.quantity++;
        }
        else{
            setCartItem([item,...cartItem])
        }
    }

    const removeFromHandler=(id)=>{
        const dltItem=cartItem.find((itm)=>itm.id === id)
        if(dltItem)
        {
            dltItem.quantity--;
            alert('Quantity Reduced')
        }
        else{
            const updated =cartItem.filter((itm)=>itm.id !== id)
            setCartItem(updated);
        }
    }
    //API useEffect adding movies data automatic
    useEffect(()=>{
      setLoading(true);
        fetchMoviesHandler();
        
    },[])
    const ctxData={
        items:cartItem,
         addtoCartItem:addToCartHandler,
        removeFromCart:removeFromHandler,
        moviesFetch:movies,
        fetchMoviesHandler:fetchMoviesHandler,
        isLoading:isLoading
    }
 return(
   <ContextAPI.Provider value={ctxData}>
    {props.children}
   </ContextAPI.Provider> 
 )
}
export default CtxProvider;
