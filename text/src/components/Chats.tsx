import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
import ChatItem from "./ChatItem";
import { Virtuoso } from "react-virtuoso";

const Chats: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<div className="flex justify-between items-center px-6 py-5">
				<h3 className="text-white font-semibold text-2xl">Chats</h3>
				<div className="text-[#aebac1] flex space-x-4">
					<LuMessageSquarePlus className="h-5 w-5" />
					<BsThreeDotsVertical className="h-5 w-5" />
				</div>
			</div>

			<div className="mx-3">
				<div>
					<div className="bg-[#1f2c33] flex px-2 rounded-lg">
						<div className="py-2 px-2">
							<IoSearchSharp className="text-[#8697a0] w-5 h-5" />
						</div>
						<input type="text" className="outline-none bg-inherit w-full px-3 text-white" placeholder="Search" />
					</div>
				</div>

				<div className="chips text-[#8697a0]">
					<button className="py-1 px-3 my-2 mr-2 bg-[#1f2c33] rounded-l-full rounded-r-full">All</button>
					<button className="py-1 px-3 my-2 mr-2 bg-[#1f2c33] rounded-l-full rounded-r-full">Unread</button>
					<button className="py-1 px-3 my-2 mr-2 bg-[#1f2c33] rounded-l-full rounded-r-full">Groups</button>
				</div>
			</div>
			<div className="flex-1">
				{/* <ScrollArea ref={setScrollPaurrent}> */}
				<Virtuoso
					totalCount={50}
					//
					itemContent={(idx) => <ChatItem key={idx} />}
					endReached={() => console.log("Load more data...")}
					// initialTopMostItemIndex={49}
				/>
				{/* </ScrollArea> */}
			</div>
		</div>
	);
};

export default Chats;
