import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from '../../Pages/Home/Home.jsx'
import Products from '../../Pages/Products/Products.jsx'
import ProductPage from '../../Pages/ProductPage/ProductPage.jsx'
import LogIn from '../../Pages/LogIn/LogIn.jsx'
import CreateAccount from '../../Pages/CreateAccount/CreateAccount.jsx'
import logoCart from "../../assets/webshopIcon.png"
import s from "./Header.module.scss"
export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section className={s.logo}>
                    <img src={logoCart} alt="The image have a shopping cart with a lot of bags." />
                    <h1>Webshop</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Home</Link></li>
                        <li><Link className={s.link} to='/products'>Products</Link></li>
                        <li><Link className={s.link} to='/log_in/*'>Log In</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/product' element={<ProductPage/>} />
                <Route path='/log_in/*' element={<LogIn/>} />
                <Route path='/create_new_account' element={<CreateAccount/>} />
            </Routes>
        </BrowserRouter>
    )
}