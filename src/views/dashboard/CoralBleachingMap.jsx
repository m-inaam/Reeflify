import { useData } from "../../Context";
import { CCoral, CCoralB, Coral, CoralWhite, Map, NCoral } from "../../assets/svg/svg";
import GoogleMap from "../../components/GoogleMapPage";


const CoralBleachingMap = () => {
    const { handleDisplayH ,handleDisplayM, handleDisplayL, handleDisplayN} = useData();
    return (
        <div className=" h-screen p-3 pr-[70px] pl-[80px]">
            <div className="h-[85vh]">
                <h2 className=" mb-2 text-white text-[20px]">Coral Bleaching Map </h2>

                <GoogleMap />
            </div>
            <div className="bg-gradient-to-r from-white via-primary to-primary p-[3px] mt-3 bg-gray rounded-lg">
                <div className=" grid grid-cols-5 justify-center text-sm items-center bg-gray p-2 rounded text-white ">
                    <div onClick={handleDisplayH} className=" hover:cursor-pointer flex gap-2 mx-auto items-center">
                        <Coral className="p-1 rounded-full border-2 border-primary" />
                        <p>High Severity</p>
                    </div>
                    <div onClick={handleDisplayM} className=" hover:cursor-pointer flex mx-auto  gap-2 items-center">
                        <CoralWhite className="p-1 rounded-full border-2 border-primary" />
                        <p>Medium Severity</p>
                    </div>
                    <div  onClick={handleDisplayL} className="  hover:cursor-pointer  flex mx-auto  gap-2 items-center">
                        <NCoral className="p-1 rounded-full border-2 border-primary" />
                        <p>Low Severity</p>
                    </div>
                    <div onClick={handleDisplayN} className="flex mx-auto  gap-2 items-center  hover:cursor-pointer ">
                        <CCoral className="p-1 rounded-full border-2 border-primary" />
                        <p>No Severity</p>
                    </div>
                    <div className="flex mx-auto  gap-2 items-center  hover:cursor-pointer ">
                        <CCoralB className="p-1 bg-white rounded-full border-2 border-primary" />
                        <p>Incomplete</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoralBleachingMap;