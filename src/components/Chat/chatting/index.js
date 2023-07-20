import BasicButton from "components/Button";
import BasicInput from "components/Input";
import { useState } from "react";
import styled from "styled-components";

const Chatting = () => {
	// 전송 시 input 값 전송
	const [inputVal, setInputVal] = useState("");
	const [sendedContents, setSendedContents] = useState([]);
	const handleInput = e => {
		// console.log(e.target.value);
		setInputVal(e.target.value);
	};
	const handleChatContent = e => {
		e.preventDefault();
		console.log(inputVal);
		setSendedContents(prev => [...prev, inputVal]);
	};

	return (
		<S.Container>
			<S.Header>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			<S.ChatMain>
				<S.Chat>
					<S.day>2023.07.06</S.day>
					<S.hr />
					<S.MyChats>
						<S.SendedTime>10:53</S.SendedTime>
						<S.SendedByMe>
							일이삼사오육칠팔구십일이삼사오육칠팔구십
						</S.SendedByMe>
					</S.MyChats>
					<S.OtherChat>
						<S.SendedByOther>
							일이삼사오육칠팔구십일이삼사오육칠팔구십
						</S.SendedByOther>
						<S.ReceivedTime>10:55</S.ReceivedTime>
					</S.OtherChat>
					<S.MyChats>
						{sendedContents.map(content => (
							<S.OneChat>
								<S.SendedTime>15:49</S.SendedTime>
								<S.SendedByMe>{content}</S.SendedByMe>
							</S.OneChat>
						))}
					</S.MyChats>
				</S.Chat>
				<S.SendWrapper onSubmit={handleChatContent}>
					<BasicInput
						variant={"chat"}
						size={"xsmall"}
						placeholder="채팅치는곳"
						onChange={handleInput}
						value={inputVal}
					/>
					<BasicButton
						type="submit"
						variant={"primary"}
						size={"xmedium"}
						children="전송"
						style={{ borderRadius: "4px" }}
					/>
				</S.SendWrapper>
			</S.ChatMain>
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	width: 450px;
	border: 1px solid #ebebeb;
	margin: 100px auto;
`;

const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
`;

const HChat = styled.div`
	width: 448px;
	background-color: #fcf9f3;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const ChatMain = styled.div`
	width: 450px;
`;

const Chat = styled.div`
	padding: 20px;
	height: 450px;
	overflow-x: hidden;
	overflow-y: scroll;
	float: left;
	&::-webkit-scrollbar {
		width: 15px;
		display: none;
	}
`;

const day = styled.div`
	font-size: 16px;
	text-align: center;
	margin-bottom: 10px;
`;

const hr = styled.hr`
	width: 400px;
	color: #d9d9d9;
`;

const MyChats = styled.div`
	width: 280px;
	float: right;
	margin-top: 20px;
	margin-bottom: 20px;
	word-wrap: break-word;
	text-align: right;
`;

const OtherChat = styled.div`
	display: flex;
	float: left;
	width: 280px;
	align-items: flex-end;
`;

const SendedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-right: 8px;
`;

const ReceivedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-left: 8px;
`;

const SendedByMe = styled.div`
	font-size: 16px;
	padding: 10px;
	align-items: start;
	float: right;
	background-color: #e6e6e6;
	word-wrap: break-word;
	border-radius: 6px;
	text-align: right;
`;

const SendedByOther = styled.div`
	font-size: 16px;
	float: left;
	align-items: start;
	padding: 10px;
	background-color: #ffffff;
	border: 1px solid #dddddd;
	word-wrap: break-word;
	border-radius: 6px;
`;

const SendWrapper = styled.form`
	display: flex;
	height: 50px;
	justify-content: space-evenly;
	align-items: center;
	padding: 10px;
	position: sticky;
	bottom: 0;
`;

const OneChat = styled.div`
	width: 280px;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
`;

const S = {
	Container,
	Header,
	HChat,
	ChatMain,
	Chat,
	day,
	hr,
	MyChats,
	OtherChat,
	ReceivedTime,
	SendedTime,
	SendedByMe,
	SendedByOther,
	SendWrapper,
	OneChat,
};
