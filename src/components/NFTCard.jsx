
// declare a functional component called "NFTCard" that takes in several props
const NFTCard = ({ nft, name, price, type, owner, ownerImage }) => {
    return (
        <div className="shadow-cards  flex flex-col rounded-lg text-xm bg-gray p-2 text-white">
            {/* render the NFT image with a fixed height and margin */}
            <img className="w-full h-[104px] mb-[5px]" src={nft} alt="" />
            <div className="flex justify-between items-center">
                <p className=" text-[10px] ">{name}</p>
                {/* render the type of NFT as a button */}
                <button className=" bg-primary px-[5px] text-white rounded-md">{type}</button>
            </div>
            <div className=" flex justify-between items-center my-[5px] ">
                <div className="flex gap-[5px] items-center ">
                    {/* render the creator's avatar */}
                    <img className=" w-5 h-5 object-cover" src={ownerImage} alt="" />
                    {/* render the creator's name */}
                    <div>
                        <p className=" text-[7px]">Creator</p>
                        <p>{owner}</p>
                    </div>
                </div>
                {/* render the current bid price in ETH */}
                <div>
                    <p className=" text-[7px]">Current Bid</p>
                    <p className=" text-end">{price + "ETH"}</p>
                </div>
            </div>
        </div>
    );
}

export default NFTCard;