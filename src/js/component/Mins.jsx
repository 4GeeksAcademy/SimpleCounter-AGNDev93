import React from "react";
import PropTypes from "prop-types";

function Mins(props) {
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col-sm-2">
                    <span>{props.segundos3}</span>
                </div>
                <div className="col-sm-2">
                    <span>{props.segundos4}</span>
                </div>
            </div>
        </div>
    );
};
Mins.propTypes = {
    segundos3: PropTypes.number,
    segundos4: PropTypes.number
}

export default Mins;