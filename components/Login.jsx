'use client';

import '@/styles/globals.css';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await signIn('credentials', {
                username: username,
                password: password,
                redirect: false
            });

            location.reload();
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="container w-full mx-auto mt-12">
            <div className="flex h-full items-center justify-center flex-wrap">
                <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                    <h1 className="mb-4 text-4xl font-extrabold bg-clip-text text-transparent flex lg:flex-col flex-wrap" style={{ backgroundImage: 'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)' }}>
                        <span className="w-full block">Hang out &nbsp;</span>
                        <span className="text-3xl lg:text-4xl">anytime, &nbsp;</span>
                        <span className="text-3xl lg:text-4xl">anywhere &nbsp;</span>
                    </h1>
                    <p className="text-sm lg:w-3/4">Chat Us makes it easy and fun to stay close to your favorite people.</p>
                </div>

                <div className="w-full lg:w-1/2 px-3">
                    <form className="flex justify-center flex-col" onSubmit={onSubmit}>
                        <p className="mb-5 text-center hidden lg:block">Please login to your account</p>
                        <div className="relative mb-5 labelled_input_field" data-te-input-wrapper-init>
                            <input
                                {...(username != '' && {"data-te-input-state-active": ""}) }
                                type="text"
                                className="peer"
                                id="txt_username"
                                placeholder="Username"
                                onChange={e => setUsername(e.target.value)} />
                            <label
                                className="transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:-translate-x-[0.6rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-x-[0.6rem] peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                htmlFor="txt_username">
                                Username
                            </label>
                        </div>

                        <div className="relative mb-5 labelled_input_field" data-te-input-wrapper-init>
                            <input
                                {...(password != '' && {"data-te-input-state-active": ""}) }
                                type="password"
                                className="peer"
                                id="txt_password"
                                placeholder="Password" 
                                onChange={e => setPassword(e.target.value)}/>
                            <label
                                className="transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:-translate-x-[0.6rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-x-[0.6rem] peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                htmlFor="txt_password">
                                Password
                            </label>
                        </div>

                        <div className="text-center">
                            <button 
                                onSubmit={onSubmit}
                                {...(loading && {disabled: ''})}
                                style={{ backgroundImage: 'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)' }}
                                className="h-10 py-2 mt-2 mb-4 inline-block w-full text-white rounded text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                                {
                                    !loading ? (
                                        <span>Log in</span>
                                    ) : (
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin mx-auto w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </span>
                                    )
                                }
                            </button>

                            <a href="#!" className="text-sm">Forgot Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;