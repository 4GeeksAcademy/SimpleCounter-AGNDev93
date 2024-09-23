
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
    return (
        <div className="main m-3 p-4">
            <SecondsCounter seconds={0} />
        </div>
    );
}

export default Home;
