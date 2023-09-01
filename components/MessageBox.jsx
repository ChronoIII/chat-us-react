'use client';

import { useState, useEffect } from 'react';

import MessageBubble from '@/components/MessageBubble';

const MessageBox = (props) => {
    const tempImage = 'https://imgs.search.brave.com/Df7sVaW2B0-eJ2r-vrv0akGhqgl2zgDuzLKyt2F2ffo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE1NzI2NDk3L2Mv/NzQ2Lzc0Ni8xMzMv/MjA2L2lsLzE0MjNm/Ny80Nzk0NTg1MTA1/L2lsXzYwMHg2MDAu/NDc5NDU4NTEwNV83/ZWo2LmpwZw';

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [friendData, setFriendData] = useState(null);

    useEffect(() => {
        getData();
        getMessages();
    }, [props.friendId])

    function getData() {
        if (props.friendId) {
            fetch('/api/user/' + props.friendId)
                .then(async res => {
                    let data = await res.json();
                    setFriendData(data);
                })
        }
    }

    function getMessages() {
        if (props.friendId) {
            let url = `/api/user/${props.userId}/message?friendId=${props.friendId}`;
            fetch(url)
                .then(async res => {
                    let data = await res.json();
                    setMessages(data);
                })
        }
    }

    function addFriend() {
        fetch(`/api/user/${props.userId}/friends`, {
            method: 'POST',
            body: JSON.stringify({
                friendId: props.friendId
            })
        })
    }

    function trySendMessage(evt) {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            sendMessage();
        }
    }

    function sendMessage() {
        fetch(`/api/user/${props.userId}/message`, {
            method: 'POST',
            body: JSON.stringify({
                content: message,
                to: props.friendId,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            addFriend();
            getMessages();
            props.sendCallback();
        })

        document.getElementById('txt_message').value = '';
    }

    function getFriendName() {
        if (!friendData) {
            return '-';
        }
        return `${friendData.first_name} ${friendData.last_name}`
    }

    function getFriendUsername() {
        if (!friendData) {
            return '-';
        }
        return `@${friendData.username}`
    }

    function getFriendPicture() {
        if (!friendData || !friendData?.picture) {
            return 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
        }
        return friendData.picture;
    }

    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-between">
            <div className="flex border-b py-4 px-4 drop-shadow">
                <img src={getFriendPicture()} className="rounded-full mr-4" alt="" style={{ width: '70px', height: '70px' }} />

                <div className="flex flex-col justify-between py-2">
                    <h1 className="font-extrabold text-lg">{getFriendName()}</h1>
                    <p>{getFriendUsername()}</p>
                </div>
            </div>

            <div id="cnt_messages" className="h-full flex flex-col px-4 py-2 overflow-y-scroll">
                {
                    messages.sort((a,b) => b.timestamp - a.timestamp).map((d, i) => {
                        return <MessageBubble 
                            key={i} 
                            message={d.content}
                            type={d.sourceId === props.friendId ? 'receiver' : 'sender'} 
                        />
                    })
                }
            </div>

            <div className="flex justify-between border-t" onKeyDown={trySendMessage}>
                <textarea onChange={e => setMessage(e.target.value)} id="txt_message" className="outline-none resize-none p-1 w-full"></textarea>
                <button onClick={sendMessage} className="p-4 border-l">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MessageBox;