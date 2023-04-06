import { CCoral, Coral, Map, Meta } from "../../assets/svg/svg";
import GoogleMapPage from "../../components/GoogleMapPage";
import NFTs from "../../components/NFTs";
import Events from "../../components/Events";
import rightshadow from "../../assets/image/rightshadow.png"
import { FiChevronDown, FiChevronRight } from "react-icons/all"
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate('')

    return (
        <div className=" h-screen p-3 pr-[70px] pl-[80px]">
            <div className="">
                <div className=" grid grid-cols-6 grid-rows-4  p-3  gap-3">
                    <div className=" row-span-4  col-span-4">
                        <div className=" mb-2 flex justify-between items-center">
                            <h2 className=" text-white text-[20px]">Coral Bleaching Map </h2>
                            <button onClick={() => { navigate("/coralBleachingMap") }} className="flex items-center gap-2 py-[7px] bg-primary rounded-lg px-[14px] text-sm text-white">
                                <Map className="w-3" />
                                <p>Open Map</p>
                            </button>
                        </div>
                        <GoogleMapPage />
                    </div>
                    <div className=" col-span-2  row-span-4  ">
                        <div className=" mb-2 flex justify-between items-center">
                            <h2 className=" text-white text-[20px]">NFT </h2>
                            <button
                                onClick={() => { navigate("/nft") }}
                                className="flex items-center gap-2 py-[7px] border-[3px] border-primary rounded-lg px-[14px] text-sm text-white">
                                <CCoral className="w-3" />
                                <p>View Collection</p>
                            </button>
                        </div>
                        <NFTs />
                    </div>
                </div>
                <div className="pl-3">
                    <div className="pr-3 flex items-end justify-between ">
                        <h3 className=" mt-3   text-white text-[20px]">Events</h3>
                        <button
                            onClick={() => { navigate("/events") }}
                            className=" flex text-base items-center p-2 text-white">
                            <p>View All</p>
                            <FiChevronDown className="text-primary" size={24} />
                        </button>
                    </div>
                    <div className=" relative flex justify-center items-center ">
                        <Events />
                        <img className=" absolute right-0 top-0" src={rightshadow} alt="" />
                        <FiChevronRight className=" absolute right-5 text-primary " size={30} />
                    </div>
                </div>
            </div>
           
            <div className="p-3">
                <h4 className="   text-white text-[20px]">Metaverse</h4>
                <div className="  bg-gradient-to-r from-white via-primary to-primary p-[3px]  bg-gray rounded-lg">
                    <div className=" h-full w-full bg-gray flex items-center justify-between p-2 rounded">
                        <Meta />
                        <button className=" text-white bg-primary px-3 py-2 text-[14px] rounded-lg">Join The Wait List</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;