'use client';

import { signOut } from "next-auth/react";
import { useState } from 'react';

import { useSession } from "next-auth/react";

const signout = (e) => {
    e.preventDefault();
    signOut();
}

const tempImage = 'https://imgs.search.brave.com/Df7sVaW2B0-eJ2r-vrv0akGhqgl2zgDuzLKyt2F2ffo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE1NzI2NDk3L2Mv/NzQ2Lzc0Ni8xMzMv/MjA2L2lsLzE0MjNm/Ny80Nzk0NTg1MTA1/L2lsXzYwMHg2MDAu/NDc5NDU4NTEwNV83/ZWo2LmpwZw';

export default function HeadProfile() {
    const [dropdown, setDropdown] = useState(false);
    const { data: session } = useSession();

    return (
        <div className="max-w-lg relative">
            <img className="rounded-full border-2 hover:border-gray-400 duration-300 mr-3 cursor-pointer" onClick={e => setDropdown(prev => !prev)} data-dropdown-toggle="dropdown" src={tempImage} alt="profile-pic" style={{width: '30px', height: '30px'}}/>

            <div className={`${dropdown ? 'block' : 'hidden'} bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-3 absolute right-0`} id="dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm">{ `${session?.user?.first_name ?? 'test'}` }</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
                </div>

                <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#!" onClick={signout} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}