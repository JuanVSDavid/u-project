import Sidenav from "./components/UI/Sidenav"
import ElementPC from "./components/ElementsContent/ElementPC"
import Content from "./components/UI/Content"
import ElementContentParte1 from "./components/ElementsContent/ElementContentParte1"
import ElementTc from "./components/ElementsContent/ElementTen"

import Parte1 from "./utils/Parte1"
import Computadoras from "./utils/Computadoras"
import Tendencias from "./utils/Tendencias"

function App() {
	return (
		<div className="wrapper">
			<Sidenav
				Parte1={Parte1}
				Computadoras={Computadoras}
				Tendencias={Tendencias}
			/>
			<Content>
				<ElementContentParte1 Parte1={Parte1} />

				<div
					id="unidadesdemedidaempleadasencomputadores"
					className="mt-2 p-3 mb-5 shadow bg-white"
				>
					<h3 className="font-weight-bold">
						Unidades de medida empleadas en computadores
					</h3>
					<hr />
					<div className="row">
						<p className="col-12 col-lg-6">
							Para comenzar, tenemos que conocer que la unidad
							básica de almacenamiento en informática es el bit
							abreviación de Binary Digit (dígito binario). Es la
							unidad más pequeña y tiene capacidad para almacenar
							únicamente dos estados diferentes: Si (1) o No (0),
							Verdadero (1) o Falso (0), etc. Un error muy común
							es confundir el bit con el byte y no nos
							confundamos, no es lo mismo, un byte está compuesto
							por un total 8 bits. Múltiples bits mezclados entre
							sí dan origen a diferentes unidades de medida como
							“mega”, “tera”, y “giga”.
						</p>
						<div className="col-12 col-lg-6">
							<img
								src="https://tallerinformatica.files.wordpress.com/2011/06/sistema-de-medidas.jpg"
								className="img-fluid"
								alt="Unidades de medida empleadas en computadores"
							/>
						</div>
					</div>
				</div>
				<ElementPC Computadoras={Computadoras} />
				<div
					id="grandesfabricadores"
					className="mt-2 p-4 mb-5 shadow bg-white"
				>
					<div className="row">
						<div className="col-12 col-lg-6 mb-sm-3 d-flex flex-column justify-content-center">
							<h3>Software</h3>
							<img
								src="https://economipedia.com/wp-content/uploads/hardware-1.jpg"
								alt="Software"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-lg-6 mb-sm-3 d-flex flex-column justify-content-center">
							<h3>Hardware</h3>
							<img
								src="http://2.bp.blogspot.com/-bfurQ7nHNCI/U17rXTcU6zI/AAAAAAAAAc4/7TarSOCo63E/s1600/Fabricantes-Hardware-Software.png"
								alt="Hardware"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div
					id="compatibilidaddehardware"
					className="mt-2 p-3 mb-5 shadow bg-white"
				>
					<h3 className="font-weight-bold">
						Compatibilidad de Hardware
					</h3>
					<hr />
					<p>
						La compatibilidad se entiende en el ámbito de la
						informática y la tecnología como la capacidad que tienen
						dos sistemas de trabajar uno con otro simultáneamente. Y
						por sistemas entendemos tanto hardware como software, de
						modo que podemos hallarnos frente a compatibilidad entre
						dos programas, entre programa y hardware, o directamente
						entre hardware.
					</p>
				</div>
				<ElementTc Tendencias={Tendencias} />
			</Content>
		</div>
	)
}

export default App
