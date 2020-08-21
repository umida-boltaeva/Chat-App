import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

class ChatListComponent extends React.Component {
  newChat = () => {
    console.log("New chat click");
  };

  selectChat = (index) => {
    console.log("select chat", index);
  };
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Button
          variant="conatined"
          fullWidth
          color="primary"
          className={classes.newChatBtn}
          onClick={this.newChat}
        ></Button>
        <List>
          {this.props.chats.map((_chat, _index) => {
            return (
              <ListItem
                onclick={() => this.selectChat(_index)}
                className={classes.listItem}
                selected={this.prop.selectedChatIndex === _index}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp">
                    {
                      _chat.users
                        .filter((_user) => _user !== this.props.userEmail)[0]
                        .split("")[0]
                    }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    _chat.users.filter(
                      (_user) => _user !== this.props.userEmail
                    )[0]
                  }
                  secondary={
                    <React.Fragment>
                      <Typography component="span" color="textPrimary">
                        {_chat.messages[
                          _chat.messages.length - 1
                        ].message.subString(0, 30)}
                      </Typography>
                    </React.Fragment>
                  }
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </main>
    );
  }
}

export default withStyles(styles)(ChatListComponent);
