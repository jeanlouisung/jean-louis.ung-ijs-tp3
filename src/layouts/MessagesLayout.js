import React from "react";
import { Layout } from "antd";

//donner des renderprops pour les content
const MessageLayout = (props) => (
  <Layout style={{ height: "calc(100%)" }}>
    <Layout.Content style={{ padding: "0 50px", height: "calc(80%)" }}>
      <Layout
        style={{
          padding: "24px 0",
          background: "#fff",
          height: "calc(100%)"
        }}
      >
        <Layout.Content style={{ padding: "0 24px", height: "calc(80%)" }}>
          { props.renderMessages() }
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: "0 50px",
        textAlign: "center",
        height: "calc(20%)"
      }}
    >
      { props.renderInput() }
    </Layout.Footer>
  </Layout>
);

export default MessageLayout;
