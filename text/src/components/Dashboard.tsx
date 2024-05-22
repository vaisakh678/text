import React from "react";
import Chats from "./Chats";

const Dashboard: React.FC = () => {
	return (
		<div className="border-x border-[#303d45] max-w-[420px] w-full bg-[#111b21] ">
			<Chats />
		</div>
	);
};

export default Dashboard;
