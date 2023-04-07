import { NavLink } from "react-router-dom";
import info from "../assets/svg/Info.svg"
import {
    BrandLogo,
    CCoral,
    Coral,
    Event,
    Figma,
    Home,
    Map,
    Meta
} from "../assets/svg/svg";
import { useState } from "react";
import { FiUsers } from "react-icons/fi";

const DashboardSideBar = () => {
    const [open, setOpen] = useState(false)
    const Routes = [
        {
            id: 1,
            link: "/",
            text: "Home",
            icon: <Home className="w-[24px]" />,
        },
        {
            id: 2,
            link: "/coralBleachingMap",
            text: "Coral Bleaching Map",
            icon: <Map className="w-[24px]" />,
        },
        {
            id: 3,
            link: "/nft",
            text: "NFT",
            icon: <Coral className="w-[24px]" />,
        },
        {
            id: 4,
            link: "/events",
            text: "Events",
            icon: <Event className="w-[24px]" />,
        },
        {
            id: 5,
            link: "/metaverse",
            text: "Metaverse",
            icon: <Meta className={` ${open ? "w-[24px] max-w-10" : "w-[40px]"}`} />,
        },
        {
            id: 6,
            link: "/team",
            text: "Meet The Team",
            icon: <FiUsers className={` ${open ? "w-[24px] max-w-10" : "w-[40px]"}`} size={24} />,
        },
    ]
    return (
        <nav onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            className={`${open ? "w-[20%]" : "w-[70px]"} fixed z-20 transition-all duration-200 shadow-cards  flex flex-col justify-between  h-screen bg-gray text-white`}>
            <div>
                <div className=" flex items-center justify-center py-3 border-b border-lightGray mx-5 ">
                    {
                        open ? <BrandLogo />
                            :
                            <CCoral className="w-[30px]" />
                    }
                </div>

                <ul className=" flex flex-col  mt-5">
                    {
                        Routes.map(({ id, link, text, icon }) => (
                            <li key={id}>
                                <NavLink style={({ isActive }) => ({
                                    borderLeft: isActive && "3px solid #F28360",

                                })}
                                    className="flex border-l-[3px] py-3 transition-opacity duration-200 border-gray px-5 gap-3"
                                    to={link} >
                                    {icon}
                                    {
                                        open ? <p className=" text-[13px] col-span-2">{text}</p> : ""
                                    }
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className=" text-white text-xm pb-3 gap-2 flex items-center flex-col">
                <img src={info} alt="" />
                <p>Release 2.0</p>
            </div>
        </nav>
    );
}

export default DashboardSideBar;