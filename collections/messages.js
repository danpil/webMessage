Messages = new Meteor.Collection( 'messages' );

Messages.allow({
  insert: function (userId, doc) {
    return (userId && doc.ownerId === userId);
  },
  update: function (userId, doc, fields, modifier) {
    return doc.ownerId === userId;
  },
  remove: function (userId, doc) {
    return doc.ownerId === userId;
  },
  fetch: ['ownerId']
});

Meteor.methods({
  messageInsert: function(message) {
    check(Meteor.userId(), String);
    check(message, String);

    let user = Meteor.user();
    let post = {
      message: message,
      ownerId: user._id,
      author: user.profile.name,
      location: user.profile.location,
      submitted: new Date()
    };

    let messageId = Messages.insert(post);

    return {
      _id: messageId
    };
  }
});
