import React from 'react'
import Nav from '../../components/Nav'
import Item from './components/Item'
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import P from '../../img/portfolio/1.jpg'
import P1 from '../../img/portfolio/4.jpg'
import P2 from '../../img/portfolio/2.jpg'
import P3 from '../../img/portfolio/3.jpg'
import P4 from '../../img/portfolio/5.jpg'


export default function Portfolio() {
    return (
        <>
           
            <div className='portfolio-top'>
               <h1>portfolio</h1>
            </div>
            
            
        <Container fixed >
        <Grid style={{textAlign:'center'}}  alignItems="center" container spacing={1} >
            <Grid item  xs={12} md={6} lg={4}>
                <Item > <img src={P} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
                <Item > <img src={P1} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item > <img src={P4} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Item > <img src={P4} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item > <img src={P2} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item > <img src={P3} alt="" /></Item>
               
            </Grid>
           
            
            
        </Grid>

        </Container>

      
        
           
        </>
    )
}
