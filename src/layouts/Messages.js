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
    return (
      <MessageLayout 
        renderMessages={() => (
          <div>
            {this.props.messages.map(message => (
              <div>{message.text}</div>
            ))}
          </div>
        )}
        renderInput={ () => <MessageInput onSubmit={this.handleSubmitMessage.bind(this)} />}
      />
    );
  }
}

const MessageInput = ({ onSubmit = () => {} }) => {
  let inputRef = React.createRef();

  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={ () => {onSubmit(inputRef.current.value) }}>send</button>
    </div>
  );
};

export default connect(mapStateToProps)(Messages);
