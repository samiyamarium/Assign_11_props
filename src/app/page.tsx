
import React from 'react';
import Childd from "./childComponent/page";
export default function Home(){
  

  return(
<div>
<div className='outline outline-8 outline-lime-900 border-4 text-center text-4xl bg-orange-200 text-orange-700 ml-60  mr-60'><b>Class 11 Assignment </b><br/> <br/>  To create 3 variables and passing/rendering props </div>
   <div className='flex m-10'>
      <div className='p-4'><Childd MyName={"Samiya"} My_Favourite_Food={"Pizza"} My_Favorite_colour={"Silver"}  /></div>
      <div className='p-4' ><Childd MyName={"Danish"} My_Favourite_Food={"Mandi"} My_Favorite_colour={"Yellow"}  /></div>
      <div  className='p-4'><Childd MyName={"Umaiza"} My_Favourite_Food={"Maggie"} My_Favorite_colour={"Pink"}  /></div></div>
      </div>
)}
