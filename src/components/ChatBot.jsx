import ChatIcon from "../assets/svg/ChatIcon.svg"
import Avatar from "../assets/image/Avatar.svg"
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike, FiChevronRight, TbSend } from "react-icons/all"
import chatBOttag from "../assets/svg/chatBOttag.svg"
import Coral2 from "../assets/svg/Coral2.svg"

const ChatBot = () => {
    const [open, setOpen] = useState(false)
    const [userInput, setUserInput] = useState({
        user_input: ''
    })

    const ChatBot = async () => {
        console.log("me")
        try {
            const response = await fetch("https://116a-201-233-202-139.ngrok.io/api/v1/nemobot", {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInput)
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log("me")
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log( error);
        }
    }

    return (
        <div className={` ${open ? "w-[390px]" : "w-[60px] flex items-center  justify-between"} shadow-cards py-3 transition-all duration-200 flex fixed right-0 top-0 h-screen   flex-col  bg-gray `}>
            <div className="  flex items-center justify-between mx-3">
                <FiChevronRight
                    onClick={() => { setOpen(!open) }}
                    className="hover:cursor-pointer text-primary" size={24} />

                <img className="hover:cursor-pointer w-[30px]" src={Avatar} alt="" />

            </div>

            {
                open &&
                <>
                    <div
                        onClick={() => { setOpen(!open) }}
                        className=" w-full h-screen bg-gray/20 fixed z-40 right-0 top-0"></div>
                    <div className=" z-40 relative m-3 border-[3px] flex justify-between flex-col border-primary rounded-md flex-1  text-white">
                        <img className=" absolute top-[-10px] right-[-10px]" src={chatBOttag} alt="" />
                        <div>
                            <h3 className=" text-center text-[24px] px-10 my-3">Hello, Ask Me Anything!</h3>
                            <div>
                                <div className=" w-full px-3 pb-[1px] justify-end flex text-xm border-b border-lightGray">
                                    <p>March 3,2023</p>
                                </div>
                            </div>
                        </div>

                        <div className=" p-3 h-[60vh] duration-200 overflow-y-auto ">
                            <div className="flex  items-end my-2 gap-2">

                                <button className=" bg-white  text-gray text-sm  max-w-[80%] pl-2 pr-1 pt-2 min-w-[30%] rounded-md ">
                                    <div>
                                        <div className="flex gap-2 ">
                                            <img className="hover:cursor-pointer w-[30px] p-[5px] bg-primary rounded-md" src={Coral2} alt="" />
                                            <p>Hi !</p>
                                        </div>

                                    </div>
                                    <p className=" text-end text-[7px]">03:00PM</p>
                                </button>
                                <div className=" flex items-center gap-2 ">
                                    <AiOutlineLike size={16} className=" text-primary" />
                                    <AiOutlineDislike size={16} className=" text-primary" />
                                </div>
                            </div>

                            <div className=" flex justify-end  my-2 gap-2">
                                <button className="  bg-white  text-gray text-sm  max-w-[80%] pl-2 pr-1 pt-2 min-w-[30%] rounded-md ">
                                    <div className="flex gap-2 ">
                                        <img className="hover:cursor-pointer w-[30px]" src={Avatar} alt="" />
                                        <p>How old is the oldest coral alive?</p>
                                    </div>
                                    <p className=" text-end text-[7px]">03:00PM</p>
                                </button>

                            </div>

                        </div>

                        <div className=" m-3 flex justify-between text-white bg-primary/50 border border-primary rounded-md text-[14px] items-center  px-3  py-1">
                            <input
                                onChange={(e) => {
                                    setUserInput({
                                        user_input: e.target.value
                                    })
                                    console.log(userInput)
                                }}
                                className=" placeholder:text-white h-[30px] bg-transparent focus:outline-none"
                                type="text"
                                placeholder="Ask me anything..." />
                            <TbSend onClick={ChatBot} size={16} />
                        </div>
                    </div>
                </>
            }


            {
                open === false && <div onClick={() => { setOpen(!open) }} className=" hover:cursor-pointer border-y bg-gray py-[2px] border-primary">
                    <div className=" border-y bg-gray py-[2px] border-primary">
                        <div className=" border-y bg-gray py-[2px] border-primary">
                            <div className=" bg-primary flex flex-col items-center text-sm   text-white">
                                <img src={ChatIcon} alt="" />
                                <h4 className="my-2 text-xm">Ask Me!</h4>
                                <p className=" bg-gray  p-1 text-[6px] text-center mb-2">Powered by Chat-GPT</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ChatBot;