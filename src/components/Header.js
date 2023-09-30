import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo512.png';
import '../components/Header.css';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { Cart } from './Cart';
export function Header(){
const{cartItems}=useContext(cartContext);
const navigate=useNavigate();
function handleButton()
{
    navigate("/cart");
}
    return(
        <div className=' mx-auto d-flex flex-wrap justify-content-between' style={{height:'80px',border:'1px solid green'}}>
           <div className="header  d-flex flex-wrap" >
            <Link to="/">
            <img src={logo} alt="Image Not found" className='' width="80" height="80"/>
            </Link>
            <p className='p-3 fs-3'>Shopping Cart</p>
           </div>
           <div className='p-4 fs-4' >
            <span className='me-4' ><NavLink style={{textDecoration:'none',color:'black'}} to="/">Home</NavLink></span>
            <span className='me-4'><NavLink style={{textDecoration:'none',color:'black'}} to="/cart">Cart</NavLink></span>
           </div>
           <div className='p-4 me-5 fs-5'>
            <span onClick={handleButton} className='btn bi bi-cart4 position-relative'><span className='badge position-absolute rounded-pill bg-danger'>{cartItems.length}</span></span>
           </div>
        </div>
    )   
}