
import React from 'react';
import img1 from './img1.png';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth, provider} from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import { setIsAuthenticated } from '../store/authSlice';

function Register() {

    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch =useDispatch();
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // if (isAuthenticated) {
    //   return <Navigate to="/" />;
    // }

    function handleCredentials(e) {
        setError("");
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
        console.log(userCredentials);
    }

    function handleRegister(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/login')
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
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
                            Sign up
                        </h1>
                        <div class="w-full flex-1 mt-8">
                            <div class="flex flex-col items-center">
                                <GoogleButton handleClick={handleGoogleSignIn} label={'Continue with Google'}></GoogleButton>
                            </div>

                            <div class="my-12 border-b text-center">
                                <div
                                    class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>

                            <div class="mx-auto max-w-xs">
                                <input 
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    onChange={(e)=>{handleCredentials(e)}} name="email" type="email" placeholder="Email" />
                                <input 
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    onChange={(e)=>{handleCredentials(e)}} name="password" type="password" placeholder="Password" />
                                <Button handleClick={handleRegister} label={'Sign Up'}></Button>
                            </div>
                            {error && <div class='my-6 italic text-red-500 text-center'>{error}</div>}
                            <div class='my-12 text-center'> Already have an account? <Link to='/login' class="underline">Login</Link>.</div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <img src={img1} alt='nature' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
