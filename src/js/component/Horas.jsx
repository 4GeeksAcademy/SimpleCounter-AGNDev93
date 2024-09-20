import React from "react";
import PropTypes from "prop-types";

function Horas(props) {
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col-sm-2">
                    <span>{props.segundos5}</span>
                </div>
                <div className="col-sm-2">
                    <span>{props.segundos6}</span>
                </div>
            </div>
        </div>
    );
};
Horas.propTypes = {
    segundos5: PropTypes.number,
    segundos6: PropTypes.number
}
export default Horas;