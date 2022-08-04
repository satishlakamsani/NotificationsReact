const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, boxesText } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />>
      <p className="message">{boxesText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        boxesText="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        boxesText="Success-Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        boxesText="Warning-Message"
      />
      <Notification
        className="error-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        boxesText="Error-Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
