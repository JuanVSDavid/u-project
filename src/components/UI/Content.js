import "./Content.css"

const Content = ({ children }) => {
	return (
		<div id="content" className="container-fluid">
			<div>
				<button
					type="button"
					id="sidebarCollapse"
					className="navbar-btn fixed-top"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			{children}
		</div>
	)
}

export default Content
