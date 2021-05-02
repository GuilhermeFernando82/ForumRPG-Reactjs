import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jogos from './pages/Categorias';
import home from './pages/Home';
import login from './pages/login';
import register from './pages/register';
import forum from './pages/forum';
import profile from './pages/profile';
import create from './pages/create_post';
import posts from './pages/posts';
function route(){
    return(
     <BrowserRouter>
        <Route path="/" exact component ={home}/>
        <Route path="/categoria" component={jogos}/>
        <Route path="/login" component={login}/>
        <Route path="/forum" component={forum}/>
        <Route path="/register" component={register}/>
        <Route path="/profile" component={profile}/>
        <Route path="/post" component={create}/>
        <Route path="/posts" component={posts}/>
     </BrowserRouter>        
    )
}
export default route;