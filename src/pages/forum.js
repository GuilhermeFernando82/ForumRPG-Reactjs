import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';

export default class Forum extends Component{
  constructor(props){
    super(props);
    this.state ={
       email: sessionStorage.getItem('@web/email'),
       image: sessionStorage.getItem('@web/image'),
       name: sessionStorage.getItem('@web/name'),
       senha: sessionStorage.getItem('@web/senha'),
       post: [],
       mgs:'',
    }
      this.load = this.load.bind(this)
      this.show = this.show.bind(this)
      this.login = this.login.bind(this)
  }
  componentDidMount(){
    this.load()
    
  }
  
  show(v, p){
        if(v){
          return( 
            <td style={{width:70}}>
            <div class="d-flex ml-auto p-2">
              <form method="post" action={"http://localhost:8080/delete/"+p+"/"+this.state.senha+"/"+this.state.email+"/"+this.state.name}>
                  <input type="hidden" name="email" value={this.state.email}/>
                  <input type="hidden" name="senha" value={this.state.senha}/>
                  <button class="btn btn-danger text-dark " style={{fontSize:14}} type="submit">X</button>
              </form>
            </div>
          </td>
          )}
  }
 
  load(){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3Aoe7QJS1RVn6XCLTNT9ITYeRV6w-BVF3S.vtC04wjpCyoVv8G1Vchp1WY536RAlBlu1Wq4tM0%2Bto8");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/postAll", requestOptions)
      .then(response => response.json())
      .then(response => {this.setState({post: response || []})})
      .catch(error => console.log('error', error));
  }
  
  render(){
    return (

      <React.Fragment>
      <Head></Head>
      {this.state.post.map(result =>(
      <div class="bg-dark card text-light m-3 rounded border border-success" style={{height:60}}>
          <table>
            <td>
              <a class="ml-2" href={"http://localhost:3000/posts?c="+result.id} style={{fontSize:20, fontWeight:1000, color:'green'}}>{result.titulo}</a>
            </td>
            {this.show(result.username == this.state.name, result.id)}
            
          </table>
      </div>
      ))}
      <a class="btn btn-success ml-4 mt-3" href="/post">Adicionar uma nova publicação</a>


      <footer style={{marginTop:625}}>
        <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
          <span>© 2021 Copyright: Guilherme</span>
        </div>
      </footer>
      </React.Fragment>
    );
  }
  
}
