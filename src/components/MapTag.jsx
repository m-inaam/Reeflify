import { FiChevronDown } from "react-icons/fi";
import Place from "../assets/svg/Place.svg"
import World from "../assets/svg/World.svg"
import YearView from '../assets/svg/Year-View.svg'
import { MdClose } from "react-icons/md";
import { useState } from "react";
import tree from "../assets/svg/tree.svg"
import CoralCastle from "../assets/svg/CoralCastle.svg"
import Temperature from "../assets/svg/Temperature.svg"


const MapTag = ({onMouseLeave, dcoral, country, location, bleachingSeverity, onClick, waterTemperature, coralFamily, coralSpecies }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className=" ">

            <div onMouseLeave={onMouseLeave} className={` ${dcoral ? "top-[-50vh]" : "top-10"} ${seeMore ? "w-[350px]" : "w-[250px]"} flex bg-gray text-white rounded-md transition-all duration-150 border-[3px] border-primary shadow-cards  mx-[35%] text-[8px] p-5 absolute z-40  gap-2 `}>
                <MdClose onClick={onClick} className=" absolute top-[-10px] p-2 right-[-10px] rounded-full text-white bg-primary font-semibold" size={30} />

                <div className="w-full">
                    <div className="  flex flex-col gap-2 w-full ">
                        <div className=" flex w-full items-start">
                            <div className=" w-[100%] flex flex-col gap-2">
                                <h4 className=" text-[24px]">Coral#22</h4>
                                <div className="flex gap-2 items-center">
                                    <img src={World} alt="" />
                                    <p>Country:</p>
                                    <p>{country}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src={YearView} alt="" />
                                    <p>Location:</p>
                                    <p>{location}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img src={Place} alt="" />
                                    <p>Severity Level:</p>
                                    <p className={`  ${ bleachingSeverity === "Severity Unknown" && "bg-[#E7FFA3] text-black" || bleachingSeverity === "HIGH" && "bg-red-600" || bleachingSeverity === "Medium" && "bg-[#F29560]" || bleachingSeverity === "Low" && "bg-[#FCD77F] text-black" || bleachingSeverity === "No Bleaching" && "bg-[#E7FFA3] text-black"} px-2 rounded py-[2px]`}>{bleachingSeverity}</p>
                                </div>
                             </div>  

                            {
                                seeMore &&
                                <div className=" bg-lightGray h-[100px] rounded w-[50%] relative">

                                </div>
                            }

                        </div>
                        {
                            seeMore &&
                            <div className="flex gap-2 items-center">
                                <img src={CoralCastle} alt="" />
                                <p>Coral Family:</p>
                                <p>{coralFamily}</p>
                            </div>
                        }
                        {
                            seeMore &&
                            <div className="flex gap-2 items-center">
                                <img src={tree} alt="" />
                                <p>Coral Species:</p>
                                <p>{coralSpecies}</p>
                            </div>
                        }
                        {
                            seeMore &&
                            <div className="flex gap-2 items-center">
                                <img src={Temperature} alt="" />
                                <p>Water Temprature:</p>
                                <p>{waterTemperature}</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => { setSeeMore(!seeMore) }} className=" flex justify-between mt-2 px-2 py-1 items-center text-sm rounded-md bg-primary">
                        {
                            seeMore ? <p>Less Details</p> : <p>More Details</p>
                        }
                        <FiChevronDown className={` ${seeMore && " rotate-90"} transition-all duration-200`} size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapTag;