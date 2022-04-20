// import { async } from '@firebase/util';
import { useRef, useState } from 'react';
import { singup, useAuth, logout, login, singInWithGoogle } from '../../Firebase.js';
import s from './Registration.module.css';
import google_icon from '../../icon/google_icon.svg';
import { Link, Route, Routes } from 'react-router-dom';
import AnimatedPage from '../AnimatedPage.jsx';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const handleLogOut = async () => {
    try {
        await logout();
    } catch {
        alert('Error!');
    }
}

function Registration() {
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    async function handleSingup() {
        setLoading(true);
        try {
            await singup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error!');
        }
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error!');
        }
        setLoading(false);
    }

    async function handleSingInGoogle() {
        await singInWithGoogle();
    }

    async function handleResetPassword() {
        const auth = getAuth();
        sendPasswordResetEmail(auth, emailRef.current.value)
            .then(() => {
                let res = document.getElementById('result');
                res.innerText = 'Password change request successful';
                res.style.color = '#1778F2';
                res.style.marginTop = '5px';
            })
            .catch((error) => {
                let res = document.getElementById('result');
                res.innerHTML = 'Password change request failed. Review the data and try it again';
                res.style.color = 'red';
                res.style.width = '80%';
                res.style.marginTop = '5px';
                res.style.textAlign = 'center';
            });
    }

    const Login = () => {
        return (
            <AnimatedPage>
                <div className={s.inputs}>
                    <div className={s.text}>Please login to the Poster</div>
                    <input ref={emailRef} type="email" placeholder='Email...' className={s.input} />
                    <input ref={passwordRef} type="password" placeholder='Password...' className={s.input} />
                    <Link to='/forgot' className={s.spanLink}>Forgot password?</Link>
                    <div className={s.sing_btn}>
                        <button disabled={loading || currentUser} onClick={handleLogin} className={s.btn}>Log In</button>
                    </div>
                    <span>or</span>
                    <button onClick={handleSingInGoogle} className={s.btn__google}>
                        <img src={google_icon} alt="" />
                        Sign in with Google
                    </button>
                    <span>Want to create a new account?</span>
                    <Link to='/register' className={s.btn__bottom} >Register</Link>
                </div>
            </AnimatedPage>
        )
    }

    const Forgot = () => {
        return (
            <AnimatedPage>
                <div className={s.inputs}>
                    <div className={s.text}>Forgot password</div>
                    <input ref={emailRef} type="email" placeholder='Email...' className={s.input} />
                    <div id='result'></div>
                    <button onClick={handleResetPassword} className={s.btn}>Submit</button>
                    <span className={s.link}><Link to='/'>Return to login page</Link></span>
                </div>
            </AnimatedPage>
        )
    }

    const Register = () => {
        return (
            <AnimatedPage>
                <div className={s.text}>
                    Please register on the Poster social network
                </div>
                <div className={s.inputs}>
                    <input ref={emailRef} type="email" placeholder='Email...' className={s.input} />
                    <input ref={passwordRef} type="password" placeholder='Password...' className={s.input} />
                    <div className={s.sing_btn}>
                        <button disabled={loading || currentUser} onClick={handleSingup} className={s.btn}>Sing up</button>
                    </div>
                    <span>If you are already registered, go to the Login tab</span>
                    <Link to='/' className={s.btn__bottom}>Login</Link>
                </div>
            </AnimatedPage>
        )
    }

    return (
        <div className={s.registration}>
            <div className={s.left__block}>
                <div className={s.left__block__bg}></div>
            </div>
            <div className={s.right__block}>
                <Routes style={{ transition: 'ease 2s' }}>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot' element={<Forgot />} />
                </Routes>
            </div>
        </div>
    )
}

export default Registration;


// eslint-disable-next-line no-lone-blocks
{/* <input
                        // value={email}
                        // onChange={(e) => emailHandler(e)}
                        // onBlur={(e) => blurHandler(e)}
                        // name='email'
                        ref={emailRef}
                        {...register("age", { min: 18, max: 99 })}
                        type="email"
                        placeholder='Email...'
                        className={s.input} />
                    {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    <input
                        name='password'
                        ref={passwordRef}
                        type="password"
                        placeholder='Password...'
                        // value={password}
                        // onChange={e => passwordHandler(e)}
                        // onBlur={e => blurHandler(e)}
                        className={s.input} />
                    {passwordError && passwordDirty && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <div className={s.sing_btn}>
                        <button disabled={loading || currentUser} onClick={handleLogin} className={s.btn}>Log In</button>
                        disabled={!formValid} disabled={loading || currentUser}
                    </div> */}