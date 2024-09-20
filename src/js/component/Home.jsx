/*import React, { useEffect, useState } from "react";*/
import React from "react"
import Segs from "./Segs.jsx"
import Mins from "./Mins.jsx"
import Horas from "./Horas.jsx"
import Reloj from "./Reloj.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	/*const [count, setcount] = useState(0)
	useEffect(() => {
		let intervalID = setInterval(() => {
			setcount(count + 1)
		}, 1000)
		return () => {
			clearInterval(intervalID)
		}
	}, [count])*/
	let segundos = 0;
	setInterval(() => {
		const digito1 = Math.floor((segundos / 1) % 10)
		const digito2 = Math.floor((segundos / 10) % 10)
		const digito3 = Math.floor((segundos / 100) % 10)
		const digito4 = Math.floor((segundos / 1000) % 10)
		const digito5 = Math.floor((segundos / 10000) % 10)
		const digito6 = Math.floor((segundos / 100000) % 10)
		segundos += 1;

		const One = digito1
		const Two = digito2
		const Three = digito3
		const Four = digito4
		const Five = digito5
		const Six = digito6

	}, 1000)

	return (
		<div className="container bg-dark text-white">
			<div className="row">
				<div className="col-sm-3">
					<Reloj />
				</div>

				<div className="col-sm-3">
					<Horas
						segundos5={Six}
						segundos6={Five}
					/>

				</div>
				<div className="col-sm-3">
					<Mins
						segundos3={Four}
						segundos4={Three}
					/>
				</div>

				<div className="col-sm-3">
					<Segs
						segundos1={Two}
						segundos2={One}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
