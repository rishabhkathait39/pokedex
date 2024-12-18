import React from 'react'


import { first151Pokemon, getFullPokedexNumber } from "../Utiles"

const SideNav = () => {
  return (
   <nav>
 
     <div className={"header"}>
        <h1 className="text-gradient">PoKedex</h1>

     </div>

     <input/>

       { first151Pokemon.map((pokemon, pokemonIndex)=>{
        return  (
            <button className={'nav-card'}>
                <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
        </button>
        )
          
       })}
   </nav>
  )
}

export default SideNav
