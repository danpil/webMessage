Meteor.publish( 'messages', function(location) {
  check(location, String);
  return Messages.find({location: location});
});
