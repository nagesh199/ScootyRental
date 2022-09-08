import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export const City = ({city})=>{
    const [cityData,setCityData] = useState([]);
    
    useEffect(()=>{
        getData()
    },[])
    const getData = ()=>{
        axios.get(`http://localhost:8080/scooty/get/${city}`).then(({data})=>{
            setCityData(data)
        })
    }
    console.log(cityData,"ciyt")
    return <div>
        
    </div>
}