import "./Sidenav.css"

const Sidenav = ({ Parte1, Computadoras, Tendencias }) => {
	const ComputadorasHREF = Computadoras.title
		.split(" ")
		.join("")
		.toLowerCase()
	return (
		<nav id="sidebar">
			<div className="sidebar-header mt-5">
				<h3>Evolución y tendencias del computador</h3>
			</div>
			<ul className="list-unstyled components">
				{Parte1.map((content) => (
					<li key={content.title}>
						<a
							href={`#${content.title
								.split(" ")
								.join("")
								.toLowerCase()}`}
							data-toggle="collapse"
							aria-expanded="false"
							className="dropdown-toggle"
						>
							{content.title}
						</a>
						<ul
							className="collapse list-unstyled"
							id={content.title.split(" ").join("").toLowerCase()}
						>
							{content.contains.map(
								(element) =>
									element.li &&
									element.li.map((x) => (
										<li key={x.title}>
											<a
												href={`#${x.title
													.split(" ")
													.join("")
													.toLowerCase()}`}
											>
												{x.title}
											</a>
										</li>
									))
							)}
						</ul>
					</li>
				))}
				<li>
					<a href={`#unidadesdemedidaempleadasencomputadores`}>
						Unidades de medida empleadas en computadores
					</a>
				</li>
				<li>
					<a
						href={`#${ComputadorasHREF}`}
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown-toggle"
					>
						{Computadoras.title}
					</a>
					<ul
						className="collapse list-unstyled"
						id={ComputadorasHREF}
					>
						{Computadoras.li.map((element) => (
							<li key={element.title}>
								<a
									href={`#${element.title
										.split(" ")
										.join("")
										.toLowerCase()}`}
								>
									{element.title}
								</a>
							</li>
						))}
					</ul>
				</li>
				<li>
					<a href={`#grandesfabricadores`}>
						Grandes Fabricadores de Software y Hardware
					</a>
				</li>
				<li>
					<a href={`#compatibilidaddehardware`}>
						Compatibilidad de Hardware
					</a>
				</li>
				<li>
					<a
						href={`#tendencias`}
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown-toggle"
					>
						Tendencias
					</a>
					<ul id="tendencias" className="collapse list-unstyled">
						{Tendencias.map((x) => (
							<li key={x.title}>
								<a
									href={`#${x.title
										.split(" ")
										.join("")
										.toLowerCase()}`}
								>
									{x.title}
								</a>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</nav>
	)
}

export default Sidenav
