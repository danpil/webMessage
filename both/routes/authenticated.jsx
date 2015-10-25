const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( Default, { yield: <Index /> } );
  }
});

authenticatedRoutes.route( '/account', {
  name: 'account',
  action() {
    ReactLayout.render( Default, { yield: <Account /> } );
  }
});

authenticatedRoutes.route( '/add', {
  name: 'add',
  action() {
    ReactLayout.render( Default, { yield: <AddMessage /> } );
  }
});
