Account = React.createClass({
  componentDidMount() {
    Modules.client.account({
      form: "#account"
    });
    $( '[name="location"]' ).val(this.state.user.profile.location);
  },
  getInitialState() {
    return {
      user: Meteor.user()
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header">Account</h4>
          <form id="account" className="account" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" value={this.state.user.emails[0].address} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Your name" value={this.state.user.profile.name} />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
                <select className="form-control" name="location">
                  <option>Киев</option>
                  <option>Харьков</option>
                  <option>Львов</option>
                  <option>Одесса</option>
                  <option>Черновцы</option>
                </select>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Edit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});
