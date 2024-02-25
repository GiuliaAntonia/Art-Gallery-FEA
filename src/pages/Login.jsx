
import React from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {useState} from 'react';
import {signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth, provider} from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import { setIsAuthenticated } from '../store/authSlice';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';

function Login() {

    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // if (isAuthenticated) {
    //     return <Navigate to="/" />;
    // }

    function handleCredentials(e) {
        setError("");
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
        console.log(userCredentials);
    }

    function handleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            console.log(userCredential.user);
            dispatch(setIsAuthenticated());
            navigate('/home');
        })
        // setPersistence(auth, browserSessionPersistence)
        // .then(() => {
        //     return signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        //     .then((userCredential) => {
        //             console.log(userCredential.user);
        //             // dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}));
        //             navigate('/home');
        //         })
        // })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    function handlePasswordReset() {
        const email = prompt('Please enter your email');
        if (email !== null){
            sendPasswordResetEmail(auth, email);
            alert('Email send! Check your inbox for password reset instructions.')
        }
            
    }

    function handleGoogleSignIn (e)  {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            navigate('/home');
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
      };

  return (
    <div>
        <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                    <div class="mt-12 flex flex-col items-center">
                        <h1 class="text-2xl xl:text-3xl font-extrabold">
                            Log in to your account
                        </h1>
                        <div class="w-full flex-1 mt-8">

                            <div class="mx-auto max-w-xs">
                                <input
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    onChange={(e)=>{handleCredentials(e)}} name="email" type="email" placeholder="Email" />
                                <input
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    onChange={(e)=>{handleCredentials(e)}} name="password" type="password" placeholder="Password" />

                                <Button handleClick={handleLogin} label={'Log in'} /> 

                                {error && <div class='my-6 italic text-red-500 text-center'>{error}</div>}

                                <div class="my-4 flex flex-col items-center">
                                    <GoogleButton handleClick={handleGoogleSignIn} label={'Log in with Google'}></GoogleButton>
                                </div>

                            </div>
                            <div onClick={handlePasswordReset} class='my-4 text-center underline'> Forgot password? </div>
                            <div class='my-6 text-center'> Don't have an account? <Link to='/' class="underline">Register</Link>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
