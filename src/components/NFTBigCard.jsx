const NFTBigCard = ({ name, Coraltype, owner, price, image, ownerImage }) => {
    return (
        <div className=" relative h-[320px] w-[320px] shadow-cardstext-base font-Casper ">
            <img className=" h-[320px] rounded-md" src={image} alt="" />
            <div className=" absolute  top-0 w-[100%] h-[100%]  text-white flex flex-col justify-between "> 
                <div className="  px-5 py-3 text-start">
                    <h4 className=" text-lg font-medium">{name}</h4>
                    <button className={` ${Coraltype === "Baby Coral" && "bg-white text-black" ||
                Coraltype === "Coral" && "bg-primary"} rounded-md px-2 py-[2px] text-sm`}>{Coraltype}</button>
                </div>
                <div className=" flex justify-between px-5 pt-2 pb-5  bg-black/50">
                    <div className=" flex gap-3  font-semibold">
                        <img className=" w-10 rounded-md " src={ownerImage} alt="" />
                        <div>
                            <h5  className=" text-xm ">Creator</h5>
                            <p>{owner}</p>
                        </div>
                    </div>
                    <div className=" text-end">
                        <h5 className=" text-xm">Current Bid</h5>
                        <p>{price} ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTBigCard;