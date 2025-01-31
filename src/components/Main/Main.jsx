import React, { useContext } from 'react'
import './Main.css'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>LaMBDA AI</p>
            <HiOutlineUserCircle color='White' size={20}/>
            </div>
            <div className="main-container">

                {!showResult
                ?<>
                 <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p> How can I Help You today?</p>
                </div>
                <div className="cards">
                <div className="card">
                    <p>Briefly summarize this concept: urban planning.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Provide questions to help me prepare for an interview.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Evaluate and rank Common Camera categories</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Recommend newtypes of Water sports</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div>
                
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon}alt=" " />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src = {assets.gemini_icon} alt='' />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                            </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }

                    </div>
                </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=> setInput(e.target.value)} value={input}
                        type='text' placeholder='Enter a Prompt Here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        LaMBDA AI is Currently in Development Phase it may display Inaccurate Information.
                    </p>
                </div>
            </div>
        </div>
     
  ) 
}

export default Main