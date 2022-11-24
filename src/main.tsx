import React from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from './Home'
import About from './About'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "about",
		element: <About />,
	},
]);

createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
