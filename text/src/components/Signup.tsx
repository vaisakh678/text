import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<Card className="max-w-[320px] w-full">
				<CardHeader>
					<CardTitle className="text-3xl font-normal">Signup</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<Input placeholder="Full Name" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
				</CardContent>
				<CardFooter className="flex flex-col">
					<Button variant="outline" className="w-full">
						Signup
					</Button>
					<div className="mt-3 text-center">
						<Button onClick={() => navigate("/login")} variant="link">
							Already have an account, Login ?
						</Button>
					</div>
					{/* <Alert variant="destructive" className="mt-3">
						<AlertTitle>Invalid credentials!.</AlertTitle>
						<AlertDescription>Check your username or password</AlertDescription>
					</Alert> */}
				</CardFooter>
			</Card>
		</div>
	);
};

export default Signup;
