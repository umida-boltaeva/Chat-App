import React from "react";
import ChatListComponent from "../chatlist/chatList";
import firebase from "../firebase";

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: [],
    };
  }

  selectChat = (chatIndex) => {
    console.log("Selected a chat!", chatIndex);
  };

  newChatBtnClicked = () => {
    this.setState({ newChatFormVisible: true, selectedChat: null });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) {
        this.props.history.push("/login");
      } else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
            });
            console.log(this.state);
          });
      }
    });
  };

  render() {
    return (
      <div>
        <div>Hello World from Dashboard</div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        ></ChatListComponent>
      </div>
    );
  }
}

export default DashboardComponent;
