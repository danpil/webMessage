AddMessage = React.createClass({
  componentDidMount() {
    Modules.client.add({
      form: "#add"
    });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header">Add Message</h4>
          <form id="add" className="add" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="3" name="message" placeholder="Your message"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Add" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});
