Meteor.users.allow({
  insert: () => false,
  update: function (userId, doc, fields, modifier) {
    return doc._id === userId;
  },
  remove: () => false
});
