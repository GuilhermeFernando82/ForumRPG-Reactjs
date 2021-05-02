import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';
import { Alert } from 'reactstrap';

export default class Forum extends Component{
  constructor(props){
    super(props);
    this.state ={
       email: sessionStorage.getItem('@web/email'),
       image: sessionStorage.getItem('@web/image'),
       to:'',
       post: [],
    }
    this.load = this.load.bind(this)
    this.show = this.show.bind(this)
  }
  

   componentDidMount(){
      var url_string = window.location.href;
      var url = new URL(url_string);
      this.state.to = url.searchParams.get("c");
    
      this.load()
     
    
  }
  show(v){
    if(v != undefined){
      return( 
      
      <img class="img-fluid rounded mx-auto d-block" alt="Imagem responsiva" src={this.state.post.img} id="image" height="100px" width="100px"/>)
    }
  }
  
  load(){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AXIUA4V89QyWQr2j_LZdpubf6hEs4lj2S.ofUwk3vJFAX2f%2Fbzv0c7vUpj%2ByBleXPozdcNvKt4ONM");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/posts/"+this.state.to, requestOptions)
      .then(response => response.json())
      .then(response => {this.setState({post:response || []})})
      .catch(error => console.log('error', error));
      }
    loadImg(){
      
    }

  render(){
    return (

      <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
        <h3 class="d-flex justify-content-center" style={{color:'yellow'}}>{this.state.post.titulo}</h3>
        <p class="d-flex justify-content-center" style={{fontSize:12, color:'green'}}>{this.state.post.conteudo}</p>
        {this.show(this.state.post.img)}
        <p class="d-flex justify-content-center" style={{fontSize:15, color:'green'}}>Publicado por: {this.state.post.username}</p>
 
        </div>
        
      <footer style={{marginTop:625}}>
        <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
          <span>© 2021 Copyright: Guilherme</span>
        </div>
      </footer>
      </React.Fragment>
    );
  }
  
}
