import React,{useEffect,useState} from "react";
import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import {  useDispatch } from "react-redux";
import { Container,Grow,Grid } from "@material-ui/core";
import {getPosts} from '../../actions/posts';
import useStyle from './styles'


export default function Home() {


     const [currentId,setCurrentId] = useState(null);
    
      const classes = useStyle();
      
  const dispatch = useDispatch();
  
 
useEffect(()=>{
  dispatch(getPosts());
},[currentId,dispatch]);





return (
  <Grow in>
        <Container maxWidth="xl">

          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={7} md={9}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
             
              
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}
