import React, { useState, useEffect } from 'react';
import Segs from "./Segs.jsx"
import Mins from "./Mins.jsx"
import Horas from "./Horas.jsx"
import Reloj from "./Reloj.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component

//Esta es una incorporación para ver cómo funciona
const Home = () => {
	const [segundos, setSegundos] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const digito1 = Math.floor((segundos / 1) % 10);
	const digito2 = Math.floor((segundos / 10) % 10);
	const digito3 = Math.floor((segundos / 60) % 10);
	const digito4 = Math.floor((segundos / 600) % 10);
	const digito5 = Math.floor((segundos / 3600) % 10);
	const digito6 = Math.floor((segundos / 36000) % 10);

	return (
		<div className="container bg-dark text-white">
			<div className="row">
				<div className="col-sm-3">
					<Reloj />
				</div>

				<div className="col-sm-3">
					<Horas
						segundos5={digito6}
						segundos6={digito5}
					/>
				</div>
				<div className="col-sm-3">
					<Mins
						segundos3={digito4}
						segundos4={digito3}
					/>
				</div>

				<div className="col-sm-3">
					<Segs
						segundos1={digito2}
						segundos2={digito1}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

