import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import Image1 from '../Img/380883.jpg'
import Image2 from '../Img/380890.jpg'
import Image3 from '../Img/380891.jpg'
import Image4 from '../Img/containerImg.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function home() {
  return (
    <React.Fragment>
    <Head></Head>
    <div id="carouselExampleIndicators" class="carousel slide mb-3" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 img-fluid" style={{height:400}} src={Image1} alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 img-fluid" style={{height:400}} src={Image2} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 img-fluid" style={{height:400}} src={Image3} alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container bg-dark mb-5" style={{height: '85vh'}}>
      <img  class="img-fluid p-3" alt="Imagem responsiva" style={{height: '85vh', width:'100%' }} src={Image4}></img>
      <h1 style={{fontFamily:'Times New Roman'}} class="text-lg-center">Maior Forum de Criação de Jogos do Brasil</h1>
    </div>
    <footer>
      <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
        <span>© 2021 Copyright: Guilherme</span>
      </div>
    </footer>
    </React.Fragment>
  );
}

export default home;
