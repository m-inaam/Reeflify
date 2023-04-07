import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { FiChevronDown, FiMinus, FiPlus, FiSearch } from "react-icons/all"
import EventCard from "../../components/EventCard";
import { useState } from "react";
import data from "../../data/db.json"
import tag from "../../assets/svg/tag.svg"


const EventsPage = () => {
    const eventData = data.eventData;
    return (
        <div className=" h-screen p-3 pr-[70px] pl-[80px]">
            <div className="h-[45vh]">
                <div className="mb-2">
                    <h2 className="  text-white text-[20px]">Find an Event </h2>
                    <p className=" text-sm text-white">Connect in-person or virtually with volenteers around the world.</p>
                </div>
                <GoogleMapPage />
            </div>

            <div className=" h-[55vh] mt-7 ">
                <div className="flex items-end justify-between ">
                    <h3 className=" mt-3   text-white text-[20px]">Events</h3>
                    <button
                        onClick={() => { navigate("/events") }}
                        className=" flex text-base items-center p-2 text-white">
                        <p>View All</p>
                        <FiChevronDown className="text-primary" size={24} />
                    </button>
                </div>
                <div className=" grid grid-cols-2 gap-5  pb-10  ">
                    {
                        eventData.map((item, { id }) => (
                            <EventCard key={id} style="w-full " {...item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default EventsPage;







function GoogleMapPage() {
    const [center, setCenter] = useState({ lat: 30.0, lng: 20.0 })

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBQvBo4hVVA4auP4-jbvxw7xOIBg5-elXA',
    });



    if (!isLoaded) {
        return (
            <div className="h-[91.5%] ">
                <div className="relative shadow-cards   h-[100%] w-full
              border-[3px] border-gray rounded-lg">
                    <div className=" flex justify-center items-center  h-[100%] w-full  rounded-lg border-gray "><p className=" relative h-7 w-7 border-primary rounded-full transition-all duration-75 border-[5px] border-dotted  animate-spin"></p></div>
                </div>
            </div>
        )
    }


    return (
        <div className="h-[91.5%]  ">
            <div className=" relative shadow-cards   h-[100%] w-full
              border-[3px] border-gray rounded-lg">

                <GoogleMap
                    zoom={4}
                    center={center}
                    mapContainerClassName={"  h-[100%] w-full "}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >


                    <MarkerF
                        position={{ lat: 34.0, lng: 20.0 }}

                        options={{
                            icon: tag,
                        }}
                    />

                    <MarkerF
                        position={{ lat: 31.0, lng: 23.0 }}

                        options={{
                            icon: tag,
                        }}
                    />

                </GoogleMap>

                <div className=" absolute top-2 left-2 flex justify-between text-white bg-primary/50 border border-primary rounded-md text-[14px] items-center  px-3  py-1">
                    <input
                        className=" placeholder:text-white h-[30px] bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Search for Events" />
                    <FiSearch size={16} />
                </div>

                <div className="flex flex-col  absolute  top-2  right-[10px] text-white  gap-3">
                    <FiPlus className="  bg-primary/50  border border-primary rounded-t-md w-[40px] " size={30} />
                    <FiMinus className="  bg-primary/50  border border-primary rounded-b-md w-[40px] " size={30} />
                </div>


            </div>
            <p className=" text-white text-sm">last updated: 3/22/2023</p>
        </div>

    );
}
