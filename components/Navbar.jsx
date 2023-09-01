import { getServerSession } from 'next-auth';

import HeadProfile from '@/components/HeadProfile';

const Navbar = async () => {
    const session = await getServerSession();

    return (
        <nav className="relative flex w-full py-2 text-neutral-500 shadow-lg">
            <div className="flex justify-between items-center px-3 w-full">
                <a href="#!" className="mx-2 my-1 flex items-center hover:text-neutral-700 focus:text-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    
                    <span className="font-extrabold text-gray-700 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)' }}>Chat Us</span>
                </a>

                { session != null && <HeadProfile /> }
                
            </div>
        </nav>
    )
}

export default Navbar;