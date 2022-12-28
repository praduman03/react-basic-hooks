import React, {useState} from 'react';
import {useEffect} from 'react'

export default function Counter() {
    const [Count,Setcount]=useState(1)
    const [para,Setpara]=useState('')
    useEffect(()=>{
        alert('content button clicked')
    },[para])
    const hello=()=>{
        Setpara('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita veritatis accusantium dolorum! Quas, cumque! Nemo sapiente illum accusantium similique dolorum!')
    }
  return (
    <div>
        <div>
            {para}
        </div> 
        <button onClick={hello}>Content</button>
      <p>{Count}</p>
      <button onClick={()=>Setcount(Count+1)}>Like</button>
    </div>
  )
}
