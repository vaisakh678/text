import React from "react";
import CaretDark from "../../assets//icons/caret-dark.png";
import CaretGreen from "../../assets//icons/caret-green.png";

interface IMessageChipProps {
	self?: boolean;
	message?: string;
}

const MessageChip: React.FC<IMessageChipProps> = ({ self, message }) => {
	return (
		<div className={`flex mx-8 my-2 text-white ${self ? "justify-end" : ""}`}>
			<div className={`p-1 px-3 rounded-md relative ${self ? "rounded-tr-none bg-[#025747]" : "rounded-tl-none bg-[#1c272e]"}`}>
				<span className={`h-2 w-2 absolute top-0 ${self ? "-right-2" : "-left-2"}`}>
					{self ? <img src={CaretGreen} alt="caret" /> : <img src={CaretDark} alt="caret" />}
				</span>
				<span>{message || "jfodsj"}</span>
			</div>
		</div>
	);
};

export default MessageChip;
