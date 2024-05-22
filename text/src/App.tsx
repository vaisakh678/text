import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="w-full h-dvh flex">
			<Sidebar />
			<Dashboard />
			<Messages />

			{/* <BrowserRouter>
				<Routes>
					<Route path="/">
						<Route element={<Sidebar />} />
						<Route element={<Dashboard />} />
						<Route element={<Messages />} />
					</Route>
				</Routes>
			</BrowserRouter> */}
		</div>
	);
}

export default App;
