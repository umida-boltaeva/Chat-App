import React from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.chatTextBoxContainer}>Hello</div>;
  }
}

export default withStyles(styles)(ChatTextBoxComponent);
