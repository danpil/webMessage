Index = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'messages', Meteor.user().profile.location );

    return {
      isLoading: !subscription.ready(),
      messages: Messages.find().fetch()
    };
  },
  render() {
    if ( this.data.isLoading ) {
      return <Loading />;
    } else {
      return (
        <div className="row">
          {this.data.messages.map( ( message, index ) => {
            return <Message key={index} message={message} />;
          })}
        </div>
      );
    }
  }
});
