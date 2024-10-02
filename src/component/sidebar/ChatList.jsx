import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/chats/chatSlice";



const ChatList = ( { isMobile, setIsMessagesVisible } ) => {

  
  const listOfuUsers = useSelector((state) => state.chat.users)
  // console.log(listOfuUsers)
  const dispatch = useDispatch()

  const handleClickUser = (userId) => {
    // console.log('selected user id', userId)
    dispatch(selectUser(userId));
    if (isMobile) {
      setIsMessagesVisible(true);
    }
  }

  return (
    <div className='w-full bg-white p-2 sm:p-4 h-full border-r border-gray-300 overflow-hidden'>
      <div className="h-full overflow-y-auto overflow-x-hidden">
        {listOfuUsers.map((item, index) => 
    {
      console.log('item------',item)
      return ( 
      <div
        key={index}
        onClick={() => handleClickUser(item.id)}
        className="flex items-center p-2 sm:p-3 mb-2 cursor-pointer hover:bg-blue-50 rounded-md transition-all"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3"
        />

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm sm:text-base">{item.name}</span>
          </div>
          <div className="space-x-1 flex items-center">
            <span className="text-xs sm:text-sm text-gray-600 truncate overflow-hidden text-ellipsis whitespace-nowrap">
              You: {item.lastMessage}
            </span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{item.time}</span>
          </div>
        </div>
      </div>
    )
    }
        )
        }
      </div>
    </div>
  );
};

export default ChatList;
