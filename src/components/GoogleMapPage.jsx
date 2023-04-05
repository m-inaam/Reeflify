import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";


import { FiSearch } from "react-icons/all"
import { CCoral, CCoralB, Coral, CoralWhite, NCoral } from "../assets/svg/svg";
import high from "../assets/svg/high.svg"
import lowsvg from "../assets/svg/low.svg"
import Mediumsvg from "../assets/svg/Medium.svg"
import nosvg from "../assets/svg/no.svg"
import unknown from "../assets/svg/unknown.svg"
import { useData } from "../Context";




function GoogleMapPage() {
  const { corals } = useData();

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


  const center = { lat: 30, lng: 20 };

  return (
    <div className="h-[91.5%] ">
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
            icon: <CCoral />
          }}
        >
          {
            corals.map(({ lat, lon, coralId, bleachingSeverity}) => (
              <MarkerF
                key={coralId}
                position={{
                  lat: parseFloat(lat),
                  lng: parseFloat(lon)
                }}
                options={{
                  icon: bleachingSeverity === "HIGH" && high || bleachingSeverity === "Medium" && Mediumsvg || bleachingSeverity === "Low" && lowsvg || bleachingSeverity === 	"No Bleaching" && nosvg  || bleachingSeverity === "Low" && lowsvg || bleachingSeverity === 	"Severity Unknown" && unknown ,
                }}
              />
            ))
          }

        </GoogleMap>

        <div className=" absolute top-2 left-2 flex justify-between text-white bg-primary/50 border border-primary rounded-md text-[14px] items-center  px-3  py-1">
          <input
            className=" placeholder:text-white h-[30px] bg-transparent focus:outline-none"
            type="text"
            placeholder="Search for Coral" />
          <FiSearch size={16} />
        </div>

        <div className=" flex flex-col absolute bottom-[130px] right-[10px] gap-2 w-[40px] p-1  bg-primary/50 border border-primary rounded-md items-center  ">
          <Coral className="p-1 rounded-full bg-gray border-2 border-primary" />
          <CoralWhite className="p-1 rounded-full bg-gray border-2 border-primary" />
          <NCoral className="p-1 rounded-full bg-gray border-2 border-primary" />
          <CCoral className="p-1 rounded-full bg-gray border-2 border-primary" />
          <CCoralB className="p-1 bg-white rounded-full border-2 border-primary" />
        </div>


      </div>
      <p className=" text-white text-sm">last updated: 3/22/2023</p>
    </div>

  );
}

export default GoogleMapPage

