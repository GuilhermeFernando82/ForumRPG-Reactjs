import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';

export default class Profile extends Component{
  constructor(props){
    super(props);
    this.state ={
       email: sessionStorage.getItem('@web/email'),
       name: sessionStorage.getItem('@web/name'),
       image: sessionStorage.getItem('@web/image'),
       logado_id: sessionStorage.getItem('@web/id'),
       senha: sessionStorage.getItem('@web/senha'),
       user: [],
       
    }
      this.updateImg = this.updateImg.bind(this);
      this.returnUser = this.returnUser.bind(this);
      this.updateInformation = this.updateInformation.bind(this);
  }
  async returnUser(){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3AyuLjIoIiolSYbidY0NZ_P_klCdO9WjA2.%2FPlFn5bGUe86Zdt25OehvahBWW27zNzlqEJdYVbxEig");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/returnImg/"+this.state.logado_id, requestOptions)
      .then(response => response.json())
      .then(response => {this.setState({user: response || []})})
      .catch(error => console.log('error', error));
  }
  componentDidMount(){
      this.returnUser();
  }
  updateInformation(e){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "essecookie=s%3AOCLRW4vHBbZft_7fBVdTrfELWWE_132C.rH%2BDsdzjGupj86FLB6t1IBPkNQWNtQuvTimzY12hYqk");

        var raw = JSON.stringify({"id":this.state.logado_id,"name":this.state.name,"email":this.state.email,"senha":this.state.senha});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/updateInformation", requestOptions)
          .then(response => response.json())
          .then(response => {if(response === 1){
            alert('Alterado com Sucesso!!!')
            window.location.reload()
           }else{
             
           }})
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          e.preventDefault()
  }
  updateImg(e){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "essecookie=s%3ApJZmOEEnnBgtzM9un-2ejMjsfNKOyGKp.bEqfoizoNGdxCJmrcetrDWZOXIG0uTSg0VA0B%2BagWDM");
    var fileInput = document.getElementById('file');
    var formdata = new FormData();
    formdata.append("file", fileInput.files[0], fileInput);
    formdata.append("id", this.state.logado_id);
    formdata.append("senha", this.state.senha);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/uploadImg", requestOptions)
      .then(response => response.json())
      .then(response => {if(response === 1){
          window.location.reload()
      }})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }

  render(){
    sessionStorage.setItem('@web/image', this.state.user.image)
    sessionStorage.setItem('@web/name', this.state.user.name)
    sessionStorage.setItem('@web/email', this.state.user.email)
    return (
      <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
          <span style={{fontSize:18, color:'white'}}>Bem vindo usuário: {this.state.name}</span>
          <form class="m-3" onSubmit={this.updateInformation}>
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-success" >Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label class="text-success" for="exampleInputPassword1">Nome</label>
              <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}  class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-success mb-3">Alterar</button>
        </form>
        <form class="ml-3" onSubmit={this.updateImg}>
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
                <div class="row d-flex justify-content-center">
                      <div class="form-group">
                          <div class="col-sm-12">
                            <button type="submit" style={{fontSize:12, height:45}} class="btn btn-success ml-3">Mudar Imagem</button>
                          </div>
                        </div>
                    </div>
                  </div>
          </form>
        
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
