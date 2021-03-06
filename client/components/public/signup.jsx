Signup = React.createClass({
  getInitialState() {
    return {
      loginPath: FlowHelpers.pathFor( 'login' )
    };
  },
  componentDidMount() {
    Modules.client.signup({
      form: "#signup"
    });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header">Sign Up</h4>
          <form id="signup" className="signup" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Your name" />
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
              <input type="submit" className="btn btn-success" value="Sign Up" />
            </div>
          </form>
          <p>Already have an account? <a href="/login">Log In</a>.</p>
        </div>
      </div>
    );
  }
});
