AuthenticatedNavigation = React.createClass({
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  render() {
    return (
      <div id="navbar-collapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={FlowHelpers.currentRoute( 'index' )}><a href="/">Index</a></li>
          <li className={FlowHelpers.currentRoute( 'add' )}><a href="/add">Add Message</a></li>
          <li className={FlowHelpers.currentRoute( 'account' )}><a href="/account">Account</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.currentUserEmail()} <span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
              <li onClick={Meteor.logout}><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});
