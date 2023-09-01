import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatprops = useMultiChatLogic(
        '1da3afef-1699-43d7-8758-c39b456ae303',
        props.user.username, 
        props.user.secret);

        
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops }/>
        <MultiChatWindow {...chatprops} style={{height:'100%'}}/>
    </div>
  };
  export default ChatsPage;