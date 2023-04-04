// Importing necessary packages and assets
import { Link } from "react-router-dom";
import Avatarimg from "../assets/image/Avatarimg.png"
import eventMap from "../assets/image/eventMap.png"
import eventline from "../assets/svg/eventline.svg"

// Creating a React functional component that accepts props
const EventCard = ({ name, about, location, date, link, style }) => {
    return (
        <div className="">
            <Link
                to={link}
                className={`relative shadow-cards p-3 rounded-lg bg-eventbg bg-no-repeat bg-cover bg-center text-sm w-[388px] flex justify-between text-white items-center ${style}`}
            >
                {/* Creating a container for the event name and description */}
                <div className="flex justify-between flex-col">
                    <div>
                        <h4 className="text-xl font-semibold">{name}</h4>
                        <p className="text-sm my-3 font-medium">{about}</p>
                    </div>
                    {/* Creating a container for the attendees */}
                    <div className="flex items-end">
                        <div className="flex">
                            <img className="w-6 ml-[]" src={Avatarimg} alt="" />
                            <img className="w-6 ml-[-10px]" src={Avatarimg} alt="" />
                            <img className="w-6 ml-[-10px]" src={Avatarimg} alt="" />
                            <img className="w-6 ml-[-10px]" src={Avatarimg} alt="" />
                        </div>
                        <p className="text-xm">+127 Are Joining</p>
                    </div>
                </div>
                {/* Creating a container for the event location and date */}
                <div>
                    <div className="bg-lightGray w-[133px] flex items-center flex-col rounded-lg overflow-hidden">
                        <img className="w-full h-[85px]" src={eventMap} alt="" />
                        <div className="flex justify-between px-1 py-1 items-center text-xm gap-1 border-y-4 w-full border-gray">
                            <p>{location}</p>
                            <p>{date}</p>
                        </div>
                        <div className="bg-primary w-full text-center py-1">More Details</div>
                    </div>
                </div>
                <img className=" absolute top-0 right-0" src={eventline} alt="" />
            </Link>
        </div>
    );
}

// Exporting the component
export default EventCard;
