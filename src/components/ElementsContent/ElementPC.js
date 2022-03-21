const ElementPC = ({ Computadoras }) => {
	return (
		<div className="mt-2 p-3 mb-5 shadow bg-white">
			<h3 className="font-weight-bold mb-3">{Computadoras.title}</h3>
			<p>{Computadoras.description}</p>
			<hr className="mt-2 mb-4" />
			{Computadoras.li.map((x) => (
				<>
					<div className="row mb-4">
						<div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
							<h4 id={x.title.split(" ").join("").toLowerCase()}>
								{x.title}
							</h4>
							<p>{x.description}</p>
						</div>
						<div className="col-12 col-lg-6">
							<img
								className="img-fluid"
								src={x.image}
								alt={x.title}
							/>
						</div>
					</div>
					<hr />
				</>
			))}
		</div>
	)
}

export default ElementPC
