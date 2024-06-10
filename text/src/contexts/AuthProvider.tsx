import React, { createContext, useState } from "react";

export interface IUserInfo {
	userName: string;
	email: string;
}

interface IAuthContext {
	userInfo: IUserInfo | null;
	setUserInfo: (userInfo: IUserInfo) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

	return <AuthContext.Provider value={{ userInfo, setUserInfo, isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
