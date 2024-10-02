import { createSlice } from "@reduxjs/toolkit";
import imgs from  "../../../public/user1.webp"

const initialState = {
  users: [
      {
      id: 1,
      name: "Usman",
      lastMessage: "Ohky..",
      time: "1d",
      img: "/MessengerApp/public/user1.webp",
      lastActive: 'Active 17h ago',
      msgs: [
        { text: "Guess what..", sender: "other", time: "10:16 PM" },
        {
          text: "I got a new job, Joining next week. yehhh",
          sender: "other",
          time: "10:16 PM",
        },
        { text: "What about party then?", sender: "me", time: "10:16 PM" },
        { text: "Let's go to Kababjees", sender: "me", time: "9:46 PM" },
        {
          text: "OK! bro I'll let you know.",
          sender: "other",
          time: "10:05 PM",
        },
        { text: "Yup", sender: "me", time: "10:06 PM" },
        {
          text: "So tell me in which company you got a new job?",
          sender: "me",
          time: "10:09 PM",
        },
        { text: "Bro It's Akvateq", sender: "other", time: "10:15 PM" },
        { text: "Oh! That's cool", sender: "me", time: "10:19 PM" },
        {
          text: "Btw bro what's your time on job?",
          sender: "me",
          time: "10:22 PM",
        },
        {
          text: "It's 3 to 9 and 5 days a week",
          sender: "other",
          time: "10:27 PM",
        },
        {
          text: "Ohky..",
          sender: "me",
          time: "10:27 PM",
        },
      ],
      },

      {
        id: 2,
        name: "Aima",
        lastMessage: "Hey!",
        time: "1d",
        img: "/MessengerApp/public/user2.webp",
        lastActive: 'Active 11h ago',
        msgs: [
          { text: "Hey!", sender: "other", time: "10:16 PM" },
          {
            text: "Hellow",
            sender: "me",
            time: "10:16 PM",
          },
          { text: "How are you?", sender: "other", time: "10:16 PM" },
          { text: "I'm fine thanks what about you?", sender: "me", time: "9:46 PM" },
          {
            text: "I'm also good thanks!.",
            sender: "other",
            time: "10:05 PM",
          },
          { text: "What are you doing now a days?", sender: "me", time: "10:06 PM" },
          {
            text: "Nothing much",
            sender: "other",
            time: "10:09 PM",
          },
          { text: "Ok!", sender: "me", time: "10:15 PM" },
        ],
      },

      {
        id: 3,
        name: "Amna",
        lastMessage: "Hey!",
        time: "1d",
        img: "/MessengerApp/public/user3.webp",
        lastActive: 'Active 1h ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ohky sure..", sender: "other", time: "10:06 PM" },
          {
            text: "Thanks..",
            sender: "me",
            time: "10:09 PM",
          },
        ],
      },
      // 4
      {
        id: 4,
        name: "Armaan",
        lastMessage: "Bye",
        time: "35m",
        img: "/MessengerApp/public/user4.webp",
        lastActive: 'Active 29m ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Bye", sender: "other", time: "10:06 PM" },
        ],
      },
      // 5
      {
        id: 5,
        name: "Orhan",
        lastMessage: "Coming..",
        time: "1h",
        img: "/MessengerApp/public/user5.webp",
        lastActive: 'Active 58m ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ohky sure..", sender: "other", time: "10:06 PM" },
          {
            text: "Thanks..",
            sender: "me",
            time: "10:09 PM",
          },
        ],
      },
      // 6
      {
        id: 6,
        name: "Ali",
        lastMessage: "Ohky..",
        time: "1d",
        img: "/MessengerApp/public/user6.webp",
        lastActive: 'Active 19m ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Hello",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "How are you?", sender: "me", time: "10:16 PM" },
          { text: "I'm fine thanks wby?", sender: "other", time: "9:46 PM" },
          {
            text: "I'm also fine",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ohky..", sender: "other", time: "10:06 PM" },
        ],
      },
      // 7
      {
        id: 7,
        name: "Haleema",
        lastMessage: "Ok",
        time: "1d",
        img: "/MessengerApp/public/user7.webp",
        lastActive: 'Active 19h ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ok", sender: "other", time: "10:06 PM" },
          {
            text: "Thanks..",
            sender: "me",
            time: "10:09 PM",
          },
        ],
      },
      // 8
      {
        id: 8,
        name: "Ghazi",
        lastMessage: "acha",
        time: "12h",
        img: "/MessengerApp/public/user8.webp",
        lastActive: 'Active 7h ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ohky sure..", sender: "other", time: "10:06 PM" },
          {
            text: "acha",
            sender: "me",
            time: "10:09 PM",
          },
        ],
      },
      // 9
      {
        id: 9,
        name: "Alaudin",
        lastMessage: "Thanks..",
        time: "2d",
        img: "/MessengerApp/public/user9.webp",
        lastActive: 'Active 2m ago',
        msgs: [
          { text: "Hellow", sender: "me", time: "10:16 PM" },
          {
            text: "Yes?",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "I want to discuss something with you", sender: "me", time: "10:16 PM" },
          { text: "Yes please tell me", sender: "other", time: "9:46 PM" },
          {
            text: "I'm web developer so if u found any work for me just tell me",
            sender: "me",
            time: "10:05 PM",
          },
          { text: "Ohky sure..", sender: "other", time: "10:06 PM" },
          {
            text: "Thanks..",
            sender: "me",
            time: "10:09 PM",
          },
        ],
      },
      // 10
      {
        id: 10,
        name: "Ayesha",
        lastMessage: "Alhamdulillah good",
        time: "4d",
        img: "/MessengerApp/public/user10.webp",
        lastActive: 'Active 12m ago',
        msgs: [
          { text: "Salam", sender: "me", time: "10:16 PM" },
          {
            text: "W.salam",
            sender: "other",
            time: "10:16 PM",
          },
          { text: "How Are you", sender: "other", time: "10:16 PM" },
          { text: "Alhamdulillah fine wby?", sender: "me", time: "9:46 PM" },
          {
            text: "Alhamdulillah good",
            sender: "other",
            time: "10:05 PM",
          },
        ],
      },
  ],
  selectedUser: null,
};
   

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      const userId = action.payload;
      state.selectedUser = state.users.find((user) => user.id === userId);
    },
    sentMessage: (state, action) => {
      const {userId, text} = action.payload;
      // 
      // console.log(userId, text);
      const user = state.users.find(user => user.id === userId);
      // 
      // console.log(user)
      if (user) {
        user.msgs.push({
          text: text,
          sender: 'me',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        });
        // 
        // console.log(text)
        user.lastMessage = text;
        user.time = 'just now';
        if (state.selectedUser && state.selectedUser.id === userId) {
          // 
          // console.log(state.selectedUser)
          state.selectedUser = { ...user };
          // 
          // console.log(text)
        }
      }
    },
  },
});

export const { selectUser, sentMessage } = chatSlice.actions;

export default chatSlice.reducer
