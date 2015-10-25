let add = ( options ) => {
  _validate( options.form );
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

let validation = () => {
  return {
    rules: {
      message: {
        required: true,
        maxlength: 150
      }
    },
    messages: {
      name: {
        required: 'Need a message here.',
        maxlength: 'Use max 150 characters, please.'
      }
    },
    submitHandler() { _handleAdd(); }
  };
};

let _handleAdd = () => {
  let message = $( '[name="message"]' ).val();

  Meteor.call('messageInsert', message, (error, result) => {
    if(error) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Bert.alert( 'Message add!', 'success' );
      FlowRouter.go('/');
    }
  });
};

Modules.client.add = add;
