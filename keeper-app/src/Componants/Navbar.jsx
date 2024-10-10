import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Navbar.module.css'
import noteIcon from '../assets/note-icon.svg';
const Navbar = ()=>{
  console.log('WORKING');
  
    return(
        // <div className={style.navbar}>
        //     <ul>
        //         <li><a href="">Keeper</a></li>
        //         <li className = {style.navitems}><a  href="">Menu</a></li>
        //         <li><a href="">Memos</a></li>
        //         <li><a href="">Create</a></li>
        //     </ul>
        // </div>
<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FF9100', color: 'white' }}>
  <div class="container-fluid">

    <a class="navbar-brand" href="#" style={{color:'white'}}> <img src={noteIcon} alt=""  style = {{height:'30px',width:'30px', marginRight:'15px'}}/>Keeper</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"style={{color:'white'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"style={{color:'white'}}>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:'white'}}>Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
}

export default Navbar;