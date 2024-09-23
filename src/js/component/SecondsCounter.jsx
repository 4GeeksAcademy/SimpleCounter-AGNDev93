import React, { useEffect, useState } from "react";

const SecondsCounter = ({ seconds }) => {
    const [segundos, setSegundos] = useState(seconds || 0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Calcular los dígitos a partir de los segundos
    const digitos = String(segundos).padStart(6, '0').split('').map(Number);

    return (
        <div className="container d-flex justify-content-center">
            <div className="row d-flex align-items-center justify-content-center text-white">
                <div className="col-sm-auto">
                    <i className="fas fa-clock text-white p-4"></i>
                </div>
                {digitos.map((digito, index) => (
                    <div className="col-sm-auto" key={index}>
                        <span className="p-4">{digito}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondsCounter;

