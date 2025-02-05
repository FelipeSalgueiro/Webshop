import s from './CreateAccount.module.scss'
export default function CreateAccount() {
    return (
        <main>
            <form action="">
                <h2>Create an account!</h2>
                <div className={s.divsInput}><label>Username: </label><input type='text' /></div>
                <div className={s.divsInput}><label>First Name: </label><input type='text' /></div>
                <div className={s.divsInput}><label>Middle Name: </label><input type='text' /></div>
                <div className={s.divsInput}><label>Last Name: </label><input type='text' /></div>
                <div className={s.divsInput}><label>Birth date: </label><input type='date' /></div>
                <div className={s.divsInput}><label>CPF: </label><input type='text' /></div>
                <div className={s.divsInput}><label>Password: </label><input type='password' /></div>
                <section className={s.passwordInstructions}>
                    <p>The password must have: </p>
                    <ul>
                        <li>8 Characters</li>
                        <li>1 Uppercase letter</li>
                        <li>1 Lowercase letter</li>
                        <li>1 Number</li>
                        <li>1 Special character (/, !, ., *)</li>
                    </ul>
                </section>
                <input className={s.submitButton} type='submit' value='Sign In' />
            </form>
        </main>
    )
}