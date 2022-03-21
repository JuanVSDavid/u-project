const ElementContentParte1 = ({ Parte1 }) => {
	return Parte1.map((element) => (
		<div key={element.title} className="mt-2 p-3 mb-5 shadow bg-white">
			<h3 className="font-weight-bold">{element.title}</h3>
			<hr />
			{element.contains.map((x) => (
				<>
					<div key={x.title} className="row mb-2">
						<div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
							<h4
								className="mt-2"
								id={x.title.split(" ").join("").toLowerCase()}
							>
								{x.title}
							</h4>
							<p>{x.description}</p>
						</div>
						<div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
							<img
								className="img-fluid"
								src={x.image}
								alt={x.title}
							/>
						</div>
					</div>
					<div className="row">
						<h5 className="col-12">{x.preLi}</h5>
						<ul className="col-12 list-group list-group-flush">
							{x.li.map((x) =>
								x.title !== "Software" &&
								!x.title.match(/(Referentes historicos)/g) ? (
									<li
										id={x.title
											.split(" ")
											.join("")
											.toLowerCase()}
										key={x.title}
										className="list-group-item"
									>
										<p>
											<span className="font-weight-bold">
												{x.description !== null
													? `${x.title}:`
													: x.title}
											</span>
											{x.description != null &&
												"  " +
													x.description
														.charAt(0)
														.toUpperCase() +
													x.description.slice(1)}
										</p>
									</li>
								) : null
							)}
						</ul>
					</div>
				</>
			))}
		</div>
	))
}

export default ElementContentParte1
