import NFTBigCard from "../../components/NFTBigCard";
import data from "../../data/db.json"
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/all"



import nft1img from '../../assets/image/nft1.png'
import nft2img from '../../assets/image/nft2.png'
import nft3img from '../../assets/image/nft3.png'
import nft4img from '../../assets/image/nft4.png'

import owner1img from '../../assets/image/owner1.png'
import owner2img from '../../assets/image/owner2.png'
import owner3img from '../../assets/image/owner3.png'
import owner4img from '../../assets/image/owner4.png'
import NFTCard from "../../components/NFTCard";



const NFTPage = () => {
    const { NFTSType, NFT } = data
    const NFTData = [
        {
            id: 1,
            nft: "https://i.seadn.io/gae/-Sy_5R2eK3h-TRcAW7K0lPra2s1-vcNTP0USOmxvItBcxcjS5x72n5qDp-P2fm9pQvX6p8LKm0d0AhIyIhM3PLi2j5HXOXKtzp8vOaE?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner1img
        }, {
            id: 2,
            nft: "https://i.seadn.io/gcs/files/fdc610a8704eabc2504251dad400faf9.png?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner2img
        },
        {
            id: 3,
            nft: "https://i.seadn.io/gcs/files/b240ec06fc6959cb832be7e850583230.png?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 4,
            nft: "https://i.seadn.io/gae/Z9lnFstl52H-fZrUDBvDGUFEQ4QxJNdQpK6UEoVWOVfx5M5d6rhmQQY7IX13cJlA_G8c9I_PKI8INSTogbQrANHTtYkvYP5xyikHqg?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner4img
        },
        {
            id: 42,
            nft: nft3img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 24,
            nft: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner4img
        },
        {
            id: 44,
            nft: nft2img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 440,
            nft: "https://i.seadn.io/gae/EFTXRWrYu0CKfz8doQgKZsFJdJtVzIlmGzAtZv6LPgQ0jHeD6b1y8vNQ98qRcX1pVFYtj-h1AsitFHn74XPC8FdVk2gynD6NCa10JRw?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner2img
        },
        {
            id: 440,
            nft: nft2img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 474,
            nft: nft2img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 4460,
            nft: "https://i.seadn.io/gae/XlBulqkJ06K7tP-4E832mZhuj_Qtx7x5ZiFSe-VDoHZnzvDYihJclUdjS0zncxIWpyRGFj1tDIrQM6ud505q7bfhlfaJbJDH7lSZwA?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner2img
        },
        {
            id: 4440,
            nft: "https://i.seadn.io/gae/eLGrdwQfQb1nzvDrCI3HLwZ-zEciNtfjeuq2HWsSbzuR3DyMU1xeZHv1MmnaTlXREmM8o_T20w9Dx5WEE_37lQRtJXEEtL3gX7f7hvU?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 44960,
            nft: "https://i.seadn.io/gae/63lnGnyKRBE6pmevjMLpEGKHD-XHURvfc2R-HIIrw2HpuDMxMJqV2yGMl_YX_fOIzyC2FKt0bqw55MC7yEiJqH2xOiqPN8IOkIPxWA?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner2img
        },
        {
            id: 44450,
            nft: "https://i.seadn.io/gae/igr_Y2553Hkv7cTI3-e7ZbMaETK_KDv26IOkLIlVO2jDtS9_Invyui8Jh0ReJL8CKiBpEhNd6fFAmArBwg0DsLeME9OmUL_h6wwV3g?auto=format&w=384",
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
    ]

    const CreatorData = [
        {
            id: "1",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 3,
            price: "2.4"
        },
        {
            id: "2",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 2,
            price: "2.4"
        },
        {
            id: "33",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 3,
            price: "2.4"
        },
        {
            id: "11",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 3,
            price: "2.4"
        },
        {
            id: "26",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 2,
            price: "2.4"
        },
        {
            id: "30",
            name: "SalvadorDali",
            type: "Tunisia",
            ownerImage: "https://i.seadn.io/gcs/files/4d3fbbe1f584329882efece60d2b49ad.png?auto=format&w=384",
            item: 3,
            price: "2.4"
        },
    ]
    return (
        <div className=" h-screen p-3 pr-[70px] pl-[80px] ">
            <div className="mb-2">
                <h2 className="  text-white text-[20px]">NFTs </h2>
            </div>
            <div className=" flex gap-3 text-base px-[68px]">

                {
                    NFTSType.map(({ name, id }) => (
                        <button
                            className={` ${name === "All" && "bg-gradient-to-r from-[#227A8C] via-primary to-white border-0" ||
                                name === "Coral" && "border-primary" ||
                                name === "Fish" && "border-[#227A8C]" ||
                                name === "INFLUENTIAL HYDROLOGISTS" && "border-[#272D37]"}
                             rounded-md px-2 py-[2px] min-w-[70px] text-white border-[2px]`}
                            key={id}>
                            {name}
                        </button>
                    ))
                }
            </div>
            <div className=" flex gap-5 my-5 justify-between items-center">
                <FiChevronLeft className=" text-primary" size={30} />
                {
                    NFT.map((item) => (
                        <NFTBigCard  {...item} />
                    ))
                }
                <FiChevronRight className=" text-primary" size={30} />
            </div>
            <div>
                <div className="mt-2">
                    <h3 className="  text-white text-[20px]">Top Trending</h3>
                </div>
                <div className=" gap-3 grid grid-cols-7  rounded p-2">
                    {
                        NFTData.map((item) => (
                            <NFTCard key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="flex items-end justify-between ">
                    <h3 className=" mt-3   text-white text-[20px]">Creators</h3>
                    <button
                        onClick={() => { navigate("/events") }}
                        className=" flex text-base items-center p-2 text-white">
                        <p>View All</p>
                        <FiChevronDown className="text-primary" size={24} />
                    </button>
                </div>

                <div className=" grid grid-cols-3 gap-5 pb-10">
                    {
                        CreatorData.map((item) => (
                            <CreatorTag {...item} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default NFTPage;



const CreatorTag = ({ name, type, price, ownerImage, item }) => {
    return (
        <div className=" flex justify-between items-center shadow-cards bg-gray text-white p-2 rounded-md text-sm ">
            <div className=" flex  gap-2 items-center">
                <img className=" rounded-md w-10 h-10" src={ownerImage} alt="" />
                <div>
                    <p>{type}</p>
                    <p>{name}</p>
                </div>
            </div>
            <div className=" text-end">
                <h5 className=" text-xm">{item} Items</h5>
                <p>{price} ETH</p>
            </div>
        </div>
    );
}

