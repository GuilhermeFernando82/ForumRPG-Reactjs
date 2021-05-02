import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media.css';
import ico from '../Img/home-48.ico'
function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand text-warning" href="/"><img src={ico}></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link hoverItem text-warning border-left border-right border-warning" href="/register"><p class="itemText">Register</p></a>
            </li>
            <li class="nav-item">
                <a class="nav-link hoverItem text-warning border-left border-right border-warning" href="/login"><p class="itemText">Login</p></a>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default App;
