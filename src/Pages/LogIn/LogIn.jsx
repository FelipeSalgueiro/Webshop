import { Route, Routes, Link } from "react-router-dom"
import Home from "../Home/Home.jsx"
import s from "./LogIn.module.scss"
export default function SingIn() {
    return (
        <main>
            <form action="">
                <section className={s.formFirstHalf}>
                    <div><label>Username: </label><input type="text" /></div>
                    <div><label>Password: </label><input type="password" /></div>
                </section>
                <div className={s.formSecondHalf}>
                    <Link to='/' className={s.newAccountLink}>Create new Account</Link>
                    <input type="submit" value="Log In" />
                </div>
            </form>
            <Routes>
                <Route path='/'></Route>
            </Routes>
        </main>
    )
}