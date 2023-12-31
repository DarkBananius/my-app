import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	let today = new Date(); // декларативный
	let year = today.getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>{year}</div>
			</header>
		</div>
	);
};

// export const App = () => {
// 	let today = new Date(); // декларативный
// 	let year = today.getFullYear();
// 	return React.createElement(
// 		"div",
// 		{
// 			className: "App"
// 		},
// 		React.createElement(
// 			"header",
// 			{
// 				className: "App-header"
// 			},
// 			React.createElement("img", {
// 				src: logo,
// 				className: "App-logo",
// 				alt: "logo"
// 			}),
// 			React.createElement(
// 				"p",
// 				null,
// 				"Edit ",
// 				React.createElement("code", null, "src/App.js"),
// 				" and save to reload."
// 			),
// 			React.createElement(
// 				"a",
// 				{
// 					className: "App-link",
// 					href: "https://reactjs.org",
// 					target: "_blank",
// 					rel: "noopener noreferrer"
// 				},
// 				"Learn React"
// 			),
// 			React.createElement("div", null, year)
// 		)
// 	);
// };
