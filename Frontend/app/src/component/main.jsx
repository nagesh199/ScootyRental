
import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { City } from "./city";
import styles from "./main.module.css"

export const Main = ()=>{
  const [cityName , setCityName] = useState('');
  const handleChange = (e)=>{
      setCityName(e.target.value);
  } 
    console.log(cityName)
    return <div>
           <div className={styles.homeimg}>
                 <div className={styles.nav}>
                     <select className={styles.city} onChange={handleChange}>
                         <option>City</option>
                         <option value="Bengaluru">Bengaluru</option>
                         <option value="Indore">Indore</option>
                         <option value="GuruGram">GuruGram</option>
                         <option value="Jaipur">Jaipur</option>
                         
                     </select>
                     <h3>Fleet and Pricing</h3>
                     <h3>FAQ</h3>
                     <h3>Safety</h3>
                     <h3>Login/Signup</h3>
                 </div>
           </div>
           <div>
               <City city={cityName}/>
           </div>
    </div>
}