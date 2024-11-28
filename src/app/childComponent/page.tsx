
import React from "react";
const Childd=(props:any)=>{
    console.log(props)
    return(
        <div className=" flex flex-1  m-32 border-4 outline outline-8 bg-cover rounded-md font-mono outline-fuchsia-950 w-58 justify-around bg-[url('/back.png')] text-black text-2xl "> <div className="p-4 "><b>Name: {props.MyName} <br/><br/>Fav_Food: {props.My_Favourite_Food} <br/><br/> Fav_colour: {props.My_Favorite_colour}</b></div></div>
    )
}

export default Childd;
