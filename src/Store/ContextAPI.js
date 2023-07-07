import React, { useEffect, useState } from 'react'

export const ContextAPI=React.createContext();
const CtxProvider= (props)=>{
    const [cartItem,setCartItem]=useState([]);
    //API function
  const [movies,setMovies]=useState([]);
  //Laoding
  const [isLoading,setLoading]=useState(false);
  //Protection of our pages
  const isToken1=!!localStorage.getItem('token');
  const [isToken,setToken]=useState(isToken1)
  const  fetchMoviesHandler= async()=>{
    let id;
    try{
      setLoading(true);
      const response=await fetch('https://swapi.dev/api/films');
      
      const data=await response.json();
      clearInterval(id);
         const transformedMovies = data.results.map(moviesData=>{
           return {
             id:moviesData.episode_id,
             title:moviesData.title,
             openingText:moviesData.opening_crawl,
             releaseDate:moviesData.release_date
           };
         });
         
         setMovies(transformedMovies);
         setLoading(false);
         console.log(transformedMovies);  
     }
     //Error Handling
     catch(err)
  {
    id= setInterval(()=>{
    fetchMoviesHandler() ;
   },3000)
    setLoading(false);
    alert(err);
  }
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
        console.log(isLoading);
    }

    const removeFromHandler=(id)=>{
        const dltItem=cartItem.find((itm)=>itm.id === id)
        if(dltItem.quantity > 1)
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
     
        fetchMoviesHandler();
        
    },[])
    const ctxData={
        items:cartItem,
         addtoCartItem:addToCartHandler,
        removeFromCart:removeFromHandler,
        moviesFetch:movies,
        fetchMoviesHandler:fetchMoviesHandler,
        isLoading:isLoading,
        isToken:isToken,
        setToken:setToken
    }
    
 return(
   <ContextAPI.Provider value={ctxData}>
    {props.children}
   </ContextAPI.Provider> 
 )
}
export default CtxProvider;

