import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<div>
				{/* <a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a> */}
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<input
					type="text"
					placeholder="Type here"
					style={{
						display: "block",
						padding: ".5rem 1rem",
					}}
				/>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
				
			<div>
				<h1>Home page</h1>
				<Link to="about">About Us</Link>
			</div>
		
			</div>
		</div>
	);
}

export default Home;
