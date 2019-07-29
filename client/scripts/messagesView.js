var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.$chats.append(MessagesView.render)

  },

  render: function () {
    var html = '';
    for (var i = 0; i < App.data.results.length; i++) {
      if (App.data.results[i].username === undefined) {
        App.data.results[i].username = 'troller'
      }
      if (App.data.results[i].text === undefined) {
        App.data.results[i].text = 'troller-pt2'
      }
      html += MessageView.render(App.data.results[i]);
    }
    return html;
  }


};