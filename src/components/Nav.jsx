import {useState, useRef ,useEffect } from "react"
import Linknav from "./Linknav";
export default function Nav( {cur}) {
    //['HOME','ABOUT','PROTOFILE','CONTACT']
    const [nav, setnav] = useState([{name:'HOME',link:'home',id:0},
    {name:'ABOUT',link:'about',id:1},
    {name:'PROTOFILE',link:'portofilo',id:2},
])
   
   

  
   
   

    const LInknav =nav.map((nav, index)=> <Linknav
     key={index} 
     
     nav={nav}
    
    
      /> )
   
    return (
        <div   className="header">

            <div className="nav">
                <ul>
                   { LInknav}
                  
                </ul>
            </div>

            <div className="myname">
                <span>AMINDEHGHAN</span>

            </div>
          
        </div>
        
    )
}
