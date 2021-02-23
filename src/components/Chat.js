import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import ChatInput from '../features/ChatInput';
import { selectRoomId } from '../features/appSlice';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../features/firebase';
import Message from '../features/Message';

function Chat() {
	const chatRef = useRef(null);
	const roomId = useSelector(selectRoomId);
	const [roomDetails] = useDocument(
		roomId && db.collection('rooms').doc(roomId)
	);
	const [roomMessages, loading] = useCollection(
		roomId && 
			db
				.collection('rooms')
				.doc(roomId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
	);
	useEffect(() => {
		chatRef?.current?.scrollIntoView({ behavior: "smooth" });
	}, [roomId, loading])
	return(
		<ChatContainer>
			{roomDetails && roomMessages && (
				<>
					<ChatHeader>
						<ChatHeaderLeft>
							<h4>
								<strong>
									#{roomDetails?.data().name}
								</strong>
							</h4>
							<StarBorderOutlinedIcon />
						</ChatHeaderLeft>
						<ChatHeaderRight>
							<p>
								<InfoOutlinedIcon />
								Details
							</p>
						</ChatHeaderRight>
					</ChatHeader>
					<ChatMessages>
						{roomMessages?.docs.map((doc) => {
							const { message, timestamp, user, userImage } = doc.data();
							return (
								<Message 
									key={doc.id}
									message={message}
									timestamp={timestamp}
									user={user}
									userImage={userImage}
								/>
							)
						})}
					</ChatMessages>
					<ChatBottom ref={chatRef} />
					<ChatInput 
						chatRef={chatRef}
						channelName={roomDetails?.data().name}
						channelId={roomId}
					/>
				</>
			)}
		</ChatContainer>
	)
}

export default Chat;

const ChatMessages = styled.div``;
const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 60px;
`;
const ChatHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid lightgray;
`;
const ChatHeaderLeft = styled.div`
	display: flex;
	align-items: center;
	> h4 {
		display: flex;
		text-transform: lowercase;
	}
	> .MuiSvgIcon-root {
		margin-left: 10px;
		font-size: 18px;
	}
`;
const ChatHeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
		font-size: 14px;
		> .MuiSvgIcon-root {
			margin-right: 5px !important;
			font-size: 16px;
		}
	}
`;
const ChatBottom = styled.div`
	padding-bottom: 200px;
`;
