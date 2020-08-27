import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatViewComponent extends React.Component {
  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return <main className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            Your conversation with&nbsp;
            {chat.users.filter((_usr) => _usr !== user)[0]}
          </div>
          <main className={classes.content}>
            {chat.messages.map((_msg, _index) => {
              return (
                <div
                  key={_index}
                  className={
                    _msg.sender === user ? classes.friendSent : classes.userSent
                  }
                >
                  {_msg.message}
                </div>
              );
            })}
            ;
          </main>
          ;
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatViewComponent);
