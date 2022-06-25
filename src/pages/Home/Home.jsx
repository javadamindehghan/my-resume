import {Link} from 'react-router-dom'
import {useEffect ,useRef} from 'react'
import Nav from '../../components/Nav'
import banner from '../../img/banner.jpg'
import User from '../../img/user.png'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { handelcurrent } from '../../action/current'


export default function Home({curser , henel}) {
const dispatch = useDispatch()
   
    const classcontent = useRef()
    useEffect(() => {
      
     
      
    
    
       
    }, [])
   

    
    return (
        <>
            
           
                
                <div  className='content-home'>
                     <h2> javad amindehghan </h2>
                     
                     <Button onClick={()=>dispatch(handelcurrent(1))} variant="contained" color="info" >about me</Button>
                    
               </div>

           

        </>
    )
}
