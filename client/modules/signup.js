let signup = ( options ) => {
  console.log(options);
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
      password: {
        required: true,
        minlength: 6
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
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.'
      },
      name: {
        required: 'Need a name here.',
        maxlength: 'Use max 25 characters, please.'
      }
    },
    submitHandler() { _handleSignup(); }
  };
};

let _handleSignup = () => {
  let user = {
    email: $( '[name="emailAddress"]' ).val(),
    password: $( '[name="password"]' ).val(),
    profile: {
      name: $( '[name="name"]' ).val(),
      location: $( '[name="location"]' ).val()
    }
  };

  Accounts.createUser( user, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Welcome!', 'success' );
    }
  });
};

Modules.client.signup = signup;
