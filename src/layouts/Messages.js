import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";

const mapStateToProps = ({ messages }, ownProps) => {
  return {
    messages,
    ...ownProps
    };
};

class Messages extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    //this.props.message
    return <MessageLayout 
      renderMessages={() => {
        <div>
          {this.props.messages}
        </div>
        }}/* mettre les render pros pour layout */
      />;
      }
}

export default connect(mapStateToProps)(Messages);
