import React from "react";
import ChatImage from "../assets/images/chats-background.png";
import { IoPersonSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import MessageChip from "./ui/MessageChip";
// import { Virtuoso } from "react-virtuoso";

const Messages: React.FC = () => {
	return (
		<div className="h-full flex-1 flex flex-col">
			<div className="bg-[#212e35] flex items-center justify-between">
				<div className="flex items-center">
					<div className="w-12 mx-4 my-2 h-12 bg-[#6a7175] flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
						<IoPersonSharp className="w-8 h-8 text-[#cfd4d6]" />
					</div>
					<div>
						<div className="text-white">Elon Musk</div>
						<div className="text-[#8697a0] text-xs">123:33am</div>
					</div>
				</div>
				<div className="mx-4">
					<button>
						<BsThreeDotsVertical className="text-white h-5 w-5" />
					</button>
				</div>
			</div>

			<div className="bg-[#0b141a] flex-1 flex flex-col relative">
				<div className="overflow-auto h-full w-full absolute">
					{Array(50)
						.fill(0)
						.map((_, idx) => {
							return (
								<span>
									<MessageChip message={"message " + idx} key={idx} self={!!(idx & 1)} />
								</span>
							);
						})}
				</div>
				{/* <Virtuoso
					totalCount={50}
					itemContent={(idx) => (
						<span>
							<MessageChip message={"message " + idx} key={idx} self={!!(idx & 1)} />
						</span>
					)}
					endReached={() => console.log("Load more data...")}
				/> */}
			</div>

			<div className="bg-[#212e35] p-3 flex items-center">
				<input
					type="text"
					className="bg-[#293840] flex rounded-lg  outline-none bg-inherit w-full px-3 py-2 text-white"
					placeholder="Type a message"
				/>
				<button className="px-3">
					<IoMdSend className="text-[#7c8b95] w-7 h-7" />
				</button>
			</div>
		</div>
	);

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
