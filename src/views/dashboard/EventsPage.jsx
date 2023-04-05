import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/all"
import { useMemo } from "react";
import Events from "../../components/Events";
import EventCard from "../../components/EventCard";


const EventsPage = () => {
    const eventData = [
        {
            id: 1,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },

        {
            id: 3,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },
        {
            id: 3,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },
        {
            id: 4,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },
    ]
    return (
        <div className=" h-screen p-3 mr-[60px] mb-20">
            <div className="h-[45vh]">
                <div className="mb-2">
                    <h2 className="  text-white text-[20px]">Find an Event </h2>
                    <p className=" text-sm text-white">Connect in-person or virtually with volenteers around the world.</p>
                </div>
                <GoogleMapPage />
            </div>

            <div className=" h-[55vh] mt-7">
                <div className="flex items-end justify-between ">
                    <h3 className=" mt-3   text-white text-[20px]">Events</h3>
                    <button
                        onClick={() => { navigate("/events") }}
                        className=" flex text-base items-center p-2 text-white">
                        <p>View All</p>
                        <FiChevronDown className="text-primary" size={24} />
                    </button>
                </div>
                <div className=" grid grid-cols-2 gap-5 ">
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
















const GoogleMapPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBQvBo4hVVA4auP4-jbvxw7xOIBg5-elXA"
    });



    if (!isLoaded) return (
        <div className="h-[91.5%] ">
            <div className="relative shadow-cards   h-[100%] w-full
            border-[3px] border-gray rounded-lg">
                <div className=" flex justify-center items-center  h-[100%] w-full  rounded-lg border-gray "><p className=" relative h-7 w-7 border-primary rounded-full transition-all duration-75 border-[5px] border-dotted  animate-spin"></p></div>
            </div>
        </div>
    )
    return <Map />


    function Map() {
         const position = useMemo(() => ({ lat: 30, lng: 33 }), []);

        return (
            <div className="h-[91.5%] ">
                <div className=" relative shadow-cards   h-[100%] w-full
            border-[3px] border-gray rounded-lg">

                    <GoogleMap
                        id="Map"
                        zoom={10}
                        center={position}
                        mapContainerClassName={"  h-[100%] w-full "}>
                        <Marker
                            position={{
                                lat: 37.772,
                                lng: -12.214
                            }}
                        />
                        <Marker position={position} />
                    </GoogleMap>

                    <div className=" absolute top-2 left-2 flex justify-between text-white bg-primary/50 border border-primary rounded-md text-[14px] items-center  px-3  py-1">
                        <input
                            className=" placeholder:text-white h-[30px] bg-transparent focus:outline-none"
                            type="text"
                            placeholder="Search for Event..." />
                        <FiSearch size={16} />
                    </div>

                </div>
            </div>

        );
    }
}
