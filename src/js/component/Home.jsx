
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
    return (
        <div className="container m-3 main">
            <div className="row d-flex justify-content-center p-4">
                <div className="col-sm-auto">
                    <SecondsCounter
                        seconds={0}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
