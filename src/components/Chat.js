import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
	return(
		<ChatContainer>
			<>
				<ChatHeader>
					<ChatHeaderLeft>
						<h4>
							<strong>
								#general
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
			</>
			<ChatMessages></ChatMessages>
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
