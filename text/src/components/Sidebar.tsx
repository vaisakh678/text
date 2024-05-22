import React from "react";
import { BsChatSquareQuote } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";

const Sidebar: React.FC = () => {
	return (
		<div className="bg-[#1f2c33] h-full w-16 text-[#aebac1] flex flex-col items-center py-3 justify-between">
			<div className="space-y-4 flex flex-col items-center">
				<button className="bg-[#374248] p-2.5 rounded-full">
					<MdOutlineChat className="w-6 h-6" />
				</button>
				<button className="bg-[#374248] p-2.5 rounded-full">
					<IoPeopleSharp className="w-6 h-6" />
				</button>
				<button className="bg-[#374248] p-2.5 rounded-full">
					<HiStatusOnline className="w-6 h-6" />
				</button>
				<button className="bg-[#374248] p-2.5 rounded-full">
					<BsChatSquareQuote className="w-6 h-6" />
				</button>
			</div>
			<div className="space-y-4">
				<button className="bg-[#374248] p-2.5 rounded-full">
					<FaGear className="w-6 h-6" />
				</button>
				<div></div>
			</div>
		</div>
	);
};

export default Sidebar;
