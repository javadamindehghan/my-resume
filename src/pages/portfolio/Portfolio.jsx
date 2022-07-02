import React from 'react'
import Nav from '../../components/Nav'
import Item from './components/Item'
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import color from '../../img/portfolio/color.png'
import slider from '../../img/portfolio/slider.jpg'
import card from '../../img/portfolio/card.jpg'
import pagination from '../../img/portfolio/pagination.png'
import random from '../../img/portfolio/randuser.jpg'
import login from '../../img/portfolio/login.png'
import compile from '../../img/portfolio/compile.jpg'
import quiz from '../../img/portfolio/quiz.png'
import blog from '../../img/portfolio/blog.png'


export default function Portfolio() {
    return (
        <>
           
            <div className='portfolio-top'>
               <h1>portfolio</h1>
            </div>
            
            
        <Container fixed >
        <Grid style={{textAlign:'center'}}  alignItems="center" container spacing={1} >
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='login' href='https://javadamindehghan.github.io/login/'  > <img src={login} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
                <Item title='quiz app' href='https://javadamindehghan.github.io/quiz/' > <img src={quiz} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='compiler' href='https://javadamindehghan.github.io/compiler/' > <img src={compile} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Item title='pagination' href='https://javadamindehghan.github.io/pagination/' > <img src={pagination} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='random user' href='https://javadamindehghan.github.io/random-user/' > <img src={random} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='pick color' href='https://javadamindehghan.github.io/color/' > <img src={color} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='sport slider' href='https://javadamindehghan.github.io/football-slider/' > <img src={slider} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='card' href='https://javadamindehghan.github.io/card/' > <img src={card} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='blog' href='https://javadamindehghan.github.io/menu/' > <img src={blog} alt="" /></Item>
               
            </Grid>
           
            
            
        </Grid>

        </Container>

      
        
           
        </>
    )
}
