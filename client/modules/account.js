let account = ( options ) => {
  _validate( options.form );
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

let validation = () => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      name: {
        required: true,
        maxlength: 25
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      name: {
        required: 'Need a name here.',
        maxlength: 'Use max 25 characters, please.'
      }
    },
    submitHandler() { _handleAccount(); }
  };
};

let _handleAccount = () => {
  let user = Meteor.user();
  let val = {
    email: $( '[name="emailAddress"]' ).val(),
    name: $( '[name="name"]' ).val(),
    location: $( '[name="location"]' ).val()
  };
  console.log(val);
  console.log(Meteor.users);

  Meteor.users.update({_id: user._id}, { $set: {"profile.name": val.name, "profile.location": val.location} }, (error) => {
    if(error) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'User update!', 'success' );
    }
  });
};

Modules.client.account = account;
