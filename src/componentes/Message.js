import React from "react";

const Message = ({ msg}) => {
  

  return (
    <div className="message">
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;