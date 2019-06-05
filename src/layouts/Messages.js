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
        renderAddMessageButton={() => {
          <div
            onClick={() =>
              this.props.dispatch({
                type: 'ADD_MESSAGE',
                text: 'tititata',
                userName: 'quentin',
                date: new Date().getTime()
              })
            }
          >
            Add message
          </div>
          }}
        renderMessages={ () => {
          <div>
            {this.props.messages.map(message => {
              <div>{message.text}</div>;
            })}
          </div>
        }}
        renderInput={ () => <MessageInput onSubmit={this.handleSubmitMessage} />}
      />
    );
  }
}

const MessageInput = ({ onSubmit = () => {} }) => {
  let inputRef = null;

  return (
    <div>
      <input ref={n => (inputRef = n)}/>
      <button onClick={ () => onSubmit(inputRef.content.value)}>send</button>
    </div>
  )
}

export default connect(mapStateToProps)(Messages);
