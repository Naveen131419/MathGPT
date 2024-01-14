import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.jpg';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] =  useState([{
    text: "hi, i am chatgpt",
    isBot: true,
  }]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res = await sendMsgToOpenAI(text);
    console.log(res);
    setMessages([
      ...messages,
      {text, isBot:false},
      { text:res, isBot:true}
    ]);
  }

  return (
    <div className="App">
      <div className='sideBar'>
          <div className='upperSide'>
            <div className='upperSideTop'><img src={gptLogo} alt="Logo" className='logo'/><span className='brand'>UCR ChatGPT</span>

            </div>
            <button className='midBtn'><img src={addBtn} alt='' className='addBtn' />New Chat</button>
            <div className='upperSiddeBottom'>
              <button className='query'><img src={msgIcon} alt='' />What is Programming ?</button>
              <button className='query'><img src={msgIcon} alt='' />How to use an API ?</button>

            </div>
          </div>
          <div className='lowerSide'>
            <div className='listItems'><img src={home} alt="" className='listItemsImg' />Home</div>
            <div className='listItems'><img src={saved} alt="" className='listItemsImg' />Saved</div>
            <div className='listItems'><img src={rocket} alt="" className='listItemsImg' />Upgrade to Pro</div>
          </div>
      </div>
      <div className='main'>
        <div className='chats'>

          {messages.map((message, i) => 
            <div key={i} className={message.isBot?'chat bot':'chat'}>
              <img className = 'chatImg' src={message.isBot?gptImgLogo:userIcon} alt = "" /><p className='txt'>{message.text}</p>
            </div>
          )}
        </div>
        <div className='chatFooter'>
          <div className = "inp">
            <input type='text' placeholder='send a message' value = {input} onChange={(e)=>{setInput(e.target.value)}}/> <button className='send' onClick={handleSend}><img src={sendBtn} alt="send" /></button>
          </div>
          <p>chat gpt may produce incorrect results</p>
        </div>

      </div>
    </div>
  );
}

export default App;
