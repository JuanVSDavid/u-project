const ElementTc = ({ Tendencias }) => {
	return Tendencias.map((element) => (
		<div
			id={element.title.split(" ").join("").toLowerCase()}
			key={element.title}
			className="mt-2 p-3 mb-5 shadow bg-white"
		>
			<h3 className="font-weight-bold">{element.title}</h3>
			<hr />
			<ul className="list-unstyled d-flex flex-sm-column flex-lg-row justify-content-between">
				{element.contains.map((x) => (
					<li className="p-2" key={x.preLi}>
						<span className="font-weight-bold">{x.preLi}</span>
						{"  " + x.description}
					</li>
				))}
			</ul>
		</div>
	))
}

export default ElementTc
