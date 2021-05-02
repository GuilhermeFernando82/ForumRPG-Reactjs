import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media.css';
import ico from '../Img/home-48.ico'
function App() {
  const exit = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:72}}>
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav col-md-1 ml-auto">
                    <li class="nav-item dropdown bg-dark">
                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={sessionStorage.getItem('@web/image')} alt="user"  class="rounded-circle" height="35" width="31"/></a>
                        <div class="dropdown-menu bg-dark text-warning border border-success dropdown-menu-right user-dd animated">
                            <a style={{fontSize:11}} class="dropdown-item bg-dark text-warning" href="/profile">Meu Perfil</a>
                            <a style={{fontSize:11}}  class="dropdown-item bg-dark text-warning" onClick={exit} href="#">Sair</a>
                         </div>
                    </li>
                
            </ul>
    </div>
    </nav>
  );
}

export default App;
