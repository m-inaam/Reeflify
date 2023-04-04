import data from "../data/db.json";

import nft1img from '../assets/image/nft1.png'
import nft2img from '../assets/image/nft2.png'
import nft3img from '../assets/image/nft3.png'
import nft4img from '../assets/image/nft4.png'

import owner1img from '../assets/image/owner1.png'
import owner2img from '../assets/image/owner2.png'
import owner3img from '../assets/image/owner3.png'
import owner4img from '../assets/image/owner4.png'

import NFTCard from "./NFTCard";

const NFTs = () => {
    const NFT = data.NFT

    const NFTData = [
        {
            id: 1,
            nft: nft1img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner1img
        }, {
            id: 2,
            nft: nft2img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner2img
        },
        {
            id: 3,
            nft: nft3img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner3img
        },
        {
            id: 4,
            nft: nft4img,
            name: "Great Coral Reef",
            type: "Coral",
            price: "4.89 ",
            owner: "SalvadorDali",
            ownerImage: owner4img
        }
    ]

    return (
        <div className="   bg-gradient-to-r from-white rounded-lg via-primary to-primary p-[3px]  ">
            <div className=" grid grid-cols-2 gap-3  rounded bg-lightGray  p-2">
                {
                    NFTData.map((item) => (
                        <NFTCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    );

}

export default NFTs;