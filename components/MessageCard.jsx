const MessageCard = (props) => {
    const tempImage = 'https://imgs.search.brave.com/Df7sVaW2B0-eJ2r-vrv0akGhqgl2zgDuzLKyt2F2ffo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE1NzI2NDk3L2Mv/NzQ2Lzc0Ni8xMzMv/MjA2L2lsLzE0MjNm/Ny80Nzk0NTg1MTA1/L2lsXzYwMHg2MDAu/NDc5NDU4NTEwNV83/ZWo2LmpwZw';

    return (
        // <div className="flex items-center mt-2 border px-4 py-2 rounded-lg border-gray-300 hover:border-gray-400 duration-300 cursor-pointer relative">
        //     <img src={tempImage} className="rounded-full mr-3" alt="" style={{ width: '50px', height: '50px' }} />

        //     <div className="self-start w-5/6 h-full flex flex-col justify-between py-1 pr-5">
        //         <h2 className="font-bold text-sm">Test name</h2>

        //         <p className="text-sm max-w-full truncate">Testing message flasjdlkjsdlkaklsjdkljdklajdkljdkljkldjaksldjaklsdjklsajdlkasjdlkajdlkjkldjskdljkldjkaldjjkl.gasdfadslkfds,.fjflk;dsjf.. </p>
        //     </div>

        //     <div className="absolute right-0 mr-5">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke={'blue'} className="w-4 h-4">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        //         </svg>
        //     </div>
        // </div>
        <div onClick={e => props.setMessageBox(props.userId)} className="bg-gray-200 m-1 mt-2 p-2 rounded cursor-pointer hover:bg-gray-300">
            <div className="flex items-center truncate">
                <img src={tempImage} className="rounded-full mr-2" alt="" style={{ width: '50px', height: '50px' }} />

                <div className="hidden lg:block">
                    <h2 className="font-bold">Test name</h2>

                    <p className="text-xs truncate">Testing messagefadsfsdfdsaolifjadsklfjldkfjkldasfjlkasdjfkldsjlfksjlk</p>
                </div>
            </div>
        </div>

        
    )
}

export default MessageCard;