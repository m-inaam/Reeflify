import EventCard from "./EventCard";
import data from "../data/db.json"

const Events = () => {
    const eventData = data.eventData;
    return (

        <div className="overflow-x-auto  flex gap-5 items-center pr-[60px]">
            {
                eventData.map((item, { id }) => (
                    <EventCard key={id} style=" max-w-[388px]" {...item} />
                ))
            }

        </div>


    );
}

export default Events;