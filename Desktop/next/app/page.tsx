import EventCard from "@/components/EventCard";
import "../components/ExploreBtn";
import ExploreBtn from "../components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

// import Image from 'next/image';
// import { events } from "@/lib/constants"; hardcoded events

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const Events = [
//     {title:'Event1', image:"/images/event1.png" },
//     {title:'Event2', image:"/images/event2.png" },
//     {title:'Event3', image:"/images/event3.png" },
//     {title:'Event4', image:"/images/event4.png" },
//     {title:'Event5', image:"/images/event5.png" },
//     {title:'Event6', image:"/images/event6.png" },

// ]

const page = async () => {
  "use cache";
  cacheLife("hours");
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();
  return (
    <section>
      <h1 className="text-center">
        The HUB for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5 ">
        Hackacthons,Meetups, and Conferences , All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
                {/* this is event destructuring {...event} like this 
            can be like this also <EventCard title="Event1" image="/images/event1.png" /> 
            here Events is a array and gets destructure..
            */}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
