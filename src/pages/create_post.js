import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';
import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class Cadastro extends Component{

  constructor(props){
    super(props);
    this.state ={
       title:'',
       conteudo:'',
       img:'',
       redirect: false,
       username: sessionStorage.getItem('@web/name'),
    }
    this.insert = this.insert.bind(this)
  }

  
  insert(e){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AJIHWFQPz4LC4JUZO0F0xYvPbyqIze__C.qzcw3qXoVMlgtI3WeBZyYH35Zv%2FMW8jy4UB6Y%2B4ap9Q");
    var fileInput = document.getElementById('file');
    var formdata = new FormData();
    
    if(fileInput.files[0] != null || fileInput.files[0] != undefined ){
      formdata.append("titulo", this.state.title);
      formdata.append("conteudo", this.state.conteudo);
      formdata.append("file", fileInput.files[0], fileInput);
      formdata.append("username", this.state.username);
    }else{
      formdata.append("titulo", this.state.title);
      formdata.append("conteudo", this.state.conteudo);
      formdata.append("username", this.state.username);
    }
   

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/create-post", requestOptions)
      .then(response => response.text())
      .then(alert('Inserido com sucesso!!!'))
      .catch(error => console.log('error', error));
      }

render(){
  if(this.state.redirect === true){
    return <Redirect
    to={{
      pathname: "/forum",  
    }}
      />
  }
  return (
    <React.Fragment>
    <Head></Head>
    <div class="container mt-3 bg-dark">
        <div class="card p-3 bg-dark">
        <form class="bg-dark"  onSubmit={this.insert}>
            <div class="form-group">
                <label class="text-success" for="exampleInputPassword1">Titolo da Publicação</label>
                <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}   class="form-control bg-light" id="exampleInputPassword1" placeholder="Titulo"/>
            </div>
            <div class="form-group">
                <label class="text-success" for="exampleInputEmail1">Conteúdo</label>
                <textarea type="text" value={this.state.conteudo} onChange={(e) => this.setState({conteudo: e.target.value})}  class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Conteúdo"/>
            </div>
            <div class="btn-group " role="group" aria-label="Exemplo básico">
                <div class="wrap-input100 validate-input" data-validate="Enter imagem">
                    <span class="btn-show-pass">
                      <i class="zmdi zmdi-eye"></i>
                    </span>
                    <label class="btn btn-secondary" style={{fontSize:12, height:45}}>
                                      Imagem
                      <i class="fas fa-cloud-upload-alt ">
                          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" hidden/>
                      </i>  
                    </label>
                  </div>
                </div>
            <button type="submit" class="btn btn-success ml-3">Publicar</button>
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

