Message = React.createClass({
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.message.author + ' - ' + this.props.message.location} </h3>
        </div>
        <div className="panel-body">{this.props.message.message}</div>
      </div>
    );
  }
});
