import EventCard from "./EventCard";

const Events = () => {
    const eventData = [
        {
            id: 1,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },

        {
            id: 3,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },
        {
            id: 3,
            name: "Great Coral Reef",
            about: "Join us for a hands-on workshop where you'll learn about the causes and consequences of coral bleaching",
            link: "",
            location: "Cairo, Egypt",
            date: "3/22/2023",

        },
    ]
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