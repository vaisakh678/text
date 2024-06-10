import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import useHttpPublic from "../hooks/useHttpPublic";
import { useFormik } from "formik";
import useAuth from "../hooks/useAuth";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const auth = useAuth();
	const httpPublic = useHttpPublic();

	const handleLogin = async (value: { email: string; password: string }) => {
		try {
			const { email, password } = value;
			const res = await httpPublic.post("/auth/login", { email, password });
			if (res?.data?.accessToken) {
				localStorage.setItem("accessToken", res.data.accessToken);
				auth?.setIsLoggedIn(true);
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		onSubmit: handleLogin,
	});

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<Card className="max-w-[320px] w-full">
				<CardHeader>
					<CardTitle className="text-3xl font-normal">Login</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<Input placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
					<Input placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password} />
				</CardContent>
				<CardFooter className="flex flex-col">
					<Button variant="outline" className="w-full" onClick={formik.submitForm} disabled={formik.isSubmitting}>
						Login
					</Button>
					<div className="mt-3 text-center">
						<Button variant="link">Forget password</Button>
						<Button variant="link" onClick={() => navigate("/signup")}>
							Create a new Account
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
