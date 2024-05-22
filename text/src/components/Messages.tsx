import React from "react";
import ChatImage from "../assets/images/chats-background.png";

const Messages: React.FC = () => {
	return (
		<div className="bg-[#212e35] h-full flex-1 flex flex-col text-[#d1d6d8] items-center justify-center">
			<img src={ChatImage} alt="" className="h-[200px]" />

			<div className="mt-8 text-center">
				<h3 className="text-3xl mb-3">Text Web</h3>
				<div className="text-[#7f8e98]">Send and receive messages without keeping your phone online.</div>
			</div>
		</div>
	);
};

export default Messages;
