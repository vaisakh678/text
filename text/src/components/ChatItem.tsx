import React from "react";
import { IoPersonSharp } from "react-icons/io5";

const ChatItem: React.FC = () => {
	return (
		<div className="bg-slate-500x flex text-white w-full hover:bg-[#1f2c33] cursor-pointer">
			<div className="w-12 mx-4 my-2 h-12 bg-[#6a7175] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
				<IoPersonSharp className="w-8 h-8 text-[#cfd4d6]" />
			</div>
			<div className="w-full pr-4 py-2 border-b border-[#232d34]">
				<div className="flex justify-between w-full">
					<div>Elon musk</div>
					<div className="text-xs text-[#8697a0]">5:20pm</div>
				</div>
				<div className="flex justify-between w-full">
					<div className="text-[#8697a0] text-sm">Elon musk</div>
					<div className="text-xs text-[#8697a0]">5:20pm</div>
				</div>
			</div>
		</div>
	);
};

export default ChatItem;
