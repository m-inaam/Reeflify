import mapImg from "../assets/image/mapImg.png"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FiSearch } from "react-icons/all"
import { CCoral, CCoralB, Coral, CoralWhite, NCoral } from "../assets/svg/svg";
import img from "../assets/svg/CCoral.svg"
import { useMemo } from "react";


export default function GoogleMapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBc2z-0e3rg9-oy5vQSMDbunbPhcymdd74"
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
    // const center = useMemo(() => ({ lat: 30, lng: 33 }), []);

    const position = {
      lat: 37.772,
      lng: -122.214
    }


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
          </GoogleMap>

          <div className=" absolute top-2 left-2 flex justify-between text-white bg-primary/50 border border-primary rounded-md text-[14px] items-center  px-3  py-1">
            <input
              className=" placeholder:text-white h-[30px] bg-transparent focus:outline-none"
              type="text"
              placeholder="Search for Coral" />
            <FiSearch size={16} />
          </div>

          <div className=" flex flex-col absolute bottom-[130px] right-[10px] gap-2 w-[40px] p-1  bg-primary/50 border border-primary rounded-md items-center  ">
            <Coral className="p-1 rounded-full border-2 border-primary" />
            <CoralWhite className="p-1 rounded-full border-2 border-primary" />
            <NCoral className="p-1 rounded-full border-2 border-primary" />
            <CCoral className="p-1 rounded-full border-2 border-primary" />
            <CCoralB className="p-1 bg-white rounded-full border-2 border-primary" />
          </div>


        </div>
        <p className=" text-white text-sm">last updated: 3/22/2023</p>
      </div>

    );
  }
}


