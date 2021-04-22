import "../css/App.css";
import Header from "./Header.js";
import Body from "./Body";
import icons from "./icons";
function App() {
	return (
		<div className="app">
			<div className="header">
				<Header />
			</div>
			<div className="body">
				<div style={{ marginBottom: "25px" }}>
					<Body
						className="body1"
						squaretype="decorative__square"
						headingicon={icons.laptop}
						iconnumber="icon1"
						textinfo="Work Experience"
						passage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					/>
				</div>
				<div style={{ marginBottom: "30px" }}>
					<Body
						className="body2"
						squaretype="decorative__square__tiny"
						headingicon={icons.education}
						iconnumber="icon2"
						textinfo="Education"
						passage="HS - Chesapeake, UNC Charlotte"
					/>
				</div>

				<div>
					<Body
						className="body2"
						squaretype="decorative__square__short"
						textinfo="Skills"
						passage="Laborum ut sunt aliqua laboris amet exercitation consequat ut sunt reprehenderit anim."
						headingicon={icons.brainicon}
						iconnumber="icon3"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
