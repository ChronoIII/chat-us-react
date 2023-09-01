'use client'

import MessageCard from '@/components/MessageCard';
import MessageBox from '@/components/MessageBox';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'

const Home = (props) => {
    let urlData = useSearchParams();
    const [heads, setHeads] = useState([]);
    const [activeUser, setActiveUser] = useState(null);

    useEffect(() => {
        getFriendList();
    }, []);

    function getFriendList() {
        fetch(`/api/user/${props.user.id}/friends`)
            .then(async res => {
                let data = await res.json();
                setHeads(data);
                setMessageBox(urlData.get('friendId') ?? data[0]?.friendId ?? null);
            });
    }

    function setMessageBox(iUserId) {
        setActiveUser(iUserId);
    }

    return (
        <main className="h-full w-full flex">
            <div className="max-w-1/3 border-r">
                {
                    (heads.length <= 0) 
                    ?
                        <div className="flex items-center h-full text-center">
                            <p className="text-gray-200">No message</p>
                        </div>
                    :
                        heads.map((sId, iIndex) => 
                            <MessageCard 
                                key={iIndex} 
                                userId={sId}
                                setMessageBox={setMessageBox} />
                        )
                }
            </div>

            <div className="w-full relative">
                <MessageBox 
                    userId={props.user.id}
                    friendId={activeUser} 
                    sendCallback={() => {
                        getFriendList()
                    }}
                />
            </div>
        </main>
    )
}

export default Home;