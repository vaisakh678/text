import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
	console.log("vite url", import.meta.env.VITE_API_URL);

	return (
		<div className="w-full h-dvh flex">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Sidebar /> <Dashboard /> <Messages />
							</>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/Signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
