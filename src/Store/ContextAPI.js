import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

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
//crud crud
  const base_url="https://crudcrud.com/api/6671f1ff51904dcea60f4b2514bc4170"
  const email=localStorage.getItem("User_email");
  
  
  //GetData
  const getData=()=>{
    const refind_email=(email || " @./").replace(/[@.]/g,"") 
    fetch(base_url +"/"+ refind_email).then((res)=>{
      const data=res.json();
      data.then((resData)=>{

        console.log(resData);
        setCartItem(resData);
      })
    }).catch((e)=>console.log("error",e));
  }

  //post
const postData=(item)=>{
  const refind_email=email.replace(/[@.]/g,"");
  fetch(base_url+"/"+ refind_email,{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      'Content-Type' :'application/json'
    }
  }).then((res)=>{
    const data=res.json();
    data.then((resData)=>{
      console.log(resData);
      getData();
    })
  }).catch((e)=>console.log('error',e))
}

//put (Update)
const update=(item,id)=>{
  const refind_email=email.replace(/[@.]/g,"")
fetch(base_url+"/"+refind_email +"/"+ id,{
  method:"PUT",
  body:JSON.stringify(item),
  headers:{
    'Content-Type':'application/json'
  }
}).then((res)=>{
  const data=res.json();
  data.res((resData)=>{
    console.log(resData);
    getData();
  })
}).catch((e)=>console.log("error",e))
}
  const addToCartHandler=(item,id)=>{
      console.log(item,id)
        const existingItem=cartItem.find((itm)=>itm.id === id);
        console.log("existingItem",existingItem)
        if(existingItem)
        {
            existingItem.quantity++;
            update(existingItem,id);
            console.log("Existing item",id,existingItem)
            return;
        }
        
        // else{
        //     setCartItem([item,...cartItem])
        // }
        console.log(isLoading);
        postData(item);
    }
//get delete
const removeItem=(id)=>{
const refind_email= email.replace(/[@.]/g,"");
fetch(base_url+"/"+refind_email +"/"+ id,{
    method:"DELETE",
    // body:JSON.stringify,
    headers:{
      'Content-Type':'application/json'
    }
  }).then((res)=>{
    
    
      console.log(res);
     getData();
    }).catch((e)=>console.log("error in remove ",e))
 
}
    const removeFromHandler=(id)=>{
        const dltItem=cartItem.find((itm)=>itm.id === id)
        if(dltItem.quantity > 1)
        {
            dltItem.quantity--;
            // alert('Quantity Reduced')
            update(dltItem,id);
            return;
        }
        // else{
        //     const updated =cartItem.filter((itm)=>itm.id !== id)
        //     setCartItem(updated);
        // }
        removeItem(id);
        console.log(cartItem);

    }
    //API useEffect adding movies data automatic
    useEffect(()=>{
     
        fetchMoviesHandler();
        getData();
    },[isToken])
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

