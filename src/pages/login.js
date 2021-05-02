import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import { Redirect } from 'react-router';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
       email:'',
       senha:'',
       redirect:false,
       user:[],
       mgs:'',
    }


    this.login = this.login.bind(this);
  }
  login(e){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "essecookie=s%3A6l2S6RMFeX9oX0acmwegmPkQ1mtCDfET.%2FQRi8Wp4RtRTxjodKW1O5N9OsjBiIv1zXg5u%2FCEDZB0");

    var raw = JSON.stringify({"email":this.state.email,"senha":this.state.senha});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then(response => response.json())
      .then(response => {if(response === 1){
        this.setState({mgs:"Email ou senha invalidos"})
      }else{
        this.setState({user:response || [], redirect:true})
      }})
    
      .catch(error => console.log('error', error));
      
      e.preventDefault()
    }

  render(){
    if(this.state.redirect){
      sessionStorage.setItem('@web/id', this.state.user.id);
      sessionStorage.setItem('@web/name', this.state.user.name);
      sessionStorage.setItem('@web/email', this.state.user.email);
      sessionStorage.setItem('@web/image', this.state.user.image);
      sessionStorage.setItem('@web/senha', this.state.senha)
      //sessionStorage.setItem('@web/senha', this.state.user.senha);
      return  <Redirect
                to={{
                pathname: "/forum",                
                //state: { data: this.state.user }
                }}
            />
    }
    return (

      <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
        <div class="card p-3 bg-dark">
            <span class="text-success">{this.state.mgs}</span>
        </div>

      </div>
      <div class="container mt-3 bg-dark">
         
          <div class="card p-3 bg-dark">
          
          <form class="bg-dark" onSubmit={this.login}>
              <div class="form-group">
                  <label class="text-success" for="exampleInputEmail1">Email address</label>
                  <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div class="form-group">
                  <label class="text-success" for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control bg-light" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}  id="exampleInputPassword1" placeholder="Password"/>
              </div>
  
              <button type="submit" class="btn btn-success">Login</button>
          </form>
          </div>
      </div>
      <footer style={{marginTop:500}}>
        <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
          <span>© 2021 Copyright: Guilherme</span>
        </div>
      </footer>
      </React.Fragment>
    );
  }
  
}
