import React from "react";
import Slideshow from "./Slideshow.jsx"
import EventsPage from "./EventsPage";
import EventsMap from "./EventsMap.jsx";

function Home(){
    return(
        <div>
            <Slideshow />
            <EventsPage />
            <EventsMap />
        </div>
    )
}

export default Home;