import PropTypes from "prop-types";
import React from "react";
function Segs(props) {
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col-sm-2">
                    <span>{props.segundos1}</span>
                </div>
                <div className="col-sm-2">
                    <span>{props.segundos2}</span>
                </div>
            </div>
        </div>
    );
};
Segs.propTypes = {
    segundos1: PropTypes.number,
    segundos2: PropTypes.number
}
export default Segs;