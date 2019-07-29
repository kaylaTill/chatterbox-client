var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  data: 'none',


  initialize: function () {
    App.username = window.location.search.substr(10);

    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      App.data = data;
      MessagesView.initialize();
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
