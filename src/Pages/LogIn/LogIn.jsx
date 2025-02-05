import { Link } from "react-router-dom"
import s from "./LogIn.module.scss"
export default function SingIn() {
    return (
        <main>
            <form action="">
                <h2>Log in with your account!</h2>
                <section className={s.formFirstHalf}>
                    <div><label>Username: </label><input type="text" /></div>
                    <div><label>Password: </label><input type="password" /></div>
                </section>
                <div className={s.formSecondHalf}>
                    <label>Don't have an acoount yet? <Link to='/create_new_account' className={s.newAccountLink}>Create new Account</Link></label>
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </main>
    )
}