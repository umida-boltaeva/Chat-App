import React from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      chatText: "",
    };
  }

  submitMessage = () => {
    if (this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      this.setState({ chatText: "" });
    }
  };

  userClickedInput = () => console.log("input clicked!");

  userTyping = (e) =>
    e.keyCode === 13
      ? // 13 is the keyCode of Enter/Return button on keyboard
        this.submitMessage()
      : this.setState({ chatText: e.target.value });

  messageValid = (text) => text && text.replace(/\s/g, "").length;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message..."
          onChange={this.userTyping}
          value={this.state.chatText}
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        />
        <Send onClick={this.submitMessage} className={classes.sendBtn} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatTextBoxComponent);
