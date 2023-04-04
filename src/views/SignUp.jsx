import { BrandLogo } from "../assets/svg/svg";
import Metamask from "../assets/svg/metaMax.svg"
import WalletConnect from "../assets/svg/WalletConnect.svg"
import TrustWallet from "../assets/svg/TrustWallet.svg"


import nft1img from '../assets/image/nft1.png'
import nft2img from '../assets/image/nft2.png'
import nft3img from '../assets/image/nft3.png'
import nft4img from '../assets/image/nft4.png'

import owner1img from '../assets/image/owner1.png'
import owner2img from '../assets/image/owner2.png'
import owner3img from '../assets/image/owner3.png'
import owner4img from '../assets/image/owner4.png'
import NFTCard from "../components/NFTCard";

const SignUp = () => {



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
            nft: nft4img,
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
            nft: nft4img,
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
    ]
    return (
        <div className=" bg-gradient-to-r h-screen from-white via-primary to-primary pb-[3px]">
            <div className="bg-bgSign h-[99.6vh]  pt-[60px] w-full flex-col gap-3 flex justify-center items-center ">
                <div className=" fixed top-0 right-0 w-full pb-[3px]  bg-gradient-to-r from-white via-primary to-primary ">
                    <div className=" flex justify-center items-center h-[60px] bg-gray border-primary">
                        <BrandLogo />
                    </div>
                </div>

                <div className=" shadow-cards text-white text-center bg-gray w-[400px] p-3 text-sm rounded-lg">
                    <div className=" relative after:relative">
                        <h3 className=" text-[20px]"> Get started</h3>
                        <p className=" my-2">Sign up with social medai, connect your wallet</p>
                        <button className="  bg-primary rounded-md w-full p-2">Connect With Social</button>

                        <div className="flex items-center justify-between my-3 after:w-[40%] after:h-[2px] after:relative after:bg-lightGray
                before:w-[40%] before:h-[2px] before:relative before:bg-lightGray">OR</div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className=" flex items-center justify-between  bg-lightGray p-2 rounded-lg">
                            <div className=" flex items-center gap-2">
                                <img src={Metamask} alt="" />
                                <p>Metamask</p>
                            </div>
                            <p className=" opacity-50">Popular</p>
                        </div>

                        <div className=" flex items-center justify-between  bg-lightGray p-2 rounded-lg">
                            <div className=" flex items-center gap-2">
                                <img src={WalletConnect} alt="" />
                                <p>WalletConnect</p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-between  bg-lightGray p-2 rounded-lg">
                            <div className=" flex items-center gap-2">
                                <img src={TrustWallet} alt="" />
                                <p>Trust Wallet</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-4 border-t-2  border-lightGray my-2 pt-3 mt-5">
                        <p>Already have an account?</p>
                        <p className=" text-primary">Log In</p>
                    </div>
                </div>

                <div>
                    <div className=" gap-3 flex  rounded p-2">
                        {
                            NFTData.map((item) => (
                                <NFTCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;