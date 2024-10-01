import React, { useEffect, useRef, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { RiFileGifFill } from "react-icons/ri";
import { ImFilePicture } from "react-icons/im";
import ChatHeader from "./ChatHeader";
import { useSelector, useDispatch } from "react-redux";
import { sentMessage } from "../../features/chats/chatSlice";



const MessagesArea = ({ isMobile, setIsMessagesVisible }) => {

const dispatch = useDispatch();
const selectedUser = useSelector(state => state.chat.selectedUser);
const [messageText, setMessageText] = useState("");
const messageEndRed = useRef(null);
const inputRef = useRef(null);
// console.log('selected user:', selectedUser);


useEffect(() => {
  if(messageEndRed.current) {
    messageEndRed.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [selectedUser?.msgs])

useEffect(() => {
  if(inputRef.current) {
    inputRef.current.focus();
  }
}, [selectedUser]);

const handleSendMessage = (e) => {
  if(e.key === 'Enter' && messageText.trim() !== '') {
    dispatch(
      sentMessage({ 
        userId: selectedUser.id,
        text: messageText.trim()
      }))
    setMessageText('')
  }
}

if (!selectedUser) {
  return <div className="w-full p-4">Select a user to start chatting!</div>;
}

  return (
    <div className="flex flex-col h-full w-full sm:w-full relative"> 
       {isMobile && (
        <button
          className="p-2 bg-blue-500 text-white fixed left-0 right-0 top-0 z-10"
          onClick={() => setIsMessagesVisible(false)}
        >
          Back to Chat List
        </button>
      )}
      {/* chat header */}
      <div className={`z-0 ${isMobile ? 'mt-10' : ''}`}>
        <ChatHeader isMobile={isMobile} />
      </div>
      {/* Message list */}
      <div className={`flex-grow p-4 overflow-y-auto ${isMobile ? 'mt-28' : ''} ${isMobile ? 'pb-16' : 'pb-20'}`}>
        {selectedUser.msgs.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-full ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
          </div>
        ))}
        <div ref={messageEndRed} />
      </div>

      {/* Input area */}
      <div className={`p-4 border-t border-gray-300 flex items-center bg-white ${isMobile ? 'fixed bottom-0 left-0 right-0' : 'relative'}`}>
        <ImFilePicture color="#3b82f6" size={22} className="mr-1 cursor-pointer"/>
        <RiFileGifFill color="#3b82f6" size={24} className="mr-1 cursor-pointer"/>
        <div className="p-2 rounded-full bg-[#e7e9ee] flex-grow mr-4 flex justify-between items-center">
        <input
          type="text"
          className="px-1 bg-[#e7e9ee] flex-grow rounded-full outline-none"
          value={messageText}
          placeholder="Type a message..."
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleSendMessage}
          ref={inputRef}
          />
        <MdEmojiEmotions color="#3b82f6" className="cursor-pointer" size={20}/>
        </div>
        <button>
          <FaThumbsUp color="#3b82f6" size={24}/>
        </button>
      </div>
    </div>
  );
};

export default MessagesArea;