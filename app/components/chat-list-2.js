import Ember from 'ember'

export default Ember.Component.extend({
  init: function () {
    this._super()
    var socket = io.connect('http://ff-chat-app.herokuapp.com/')

    socket.on('connect', function () {
      $('#connectedServer').removeClass('red').addClass('blue black-text').text('Connected to server')
    })
    socket.on('disconnect', function () {
      $('#connectedServer').removeClass('blue').addClass('red black-text').text('Not connected to server')
      $('.progress').show()
    })
    socket.on('chat', function (data) {
      $('.messages').prepend($('<li>').text(data.user.name + ': ' + data.message).addClass('li receivedMsg'))
    })
    socket.on('joined', function (user) {
      $('.messages').prepend($('<li class="joinMsg">').text(user.name + ' joined the chat.'))
    })
    socket.on('left', function (user) {
      console.log(user.name + ' left the chat.')
      $('.messages').prepend($('<li class="joinMsg">').text(user.name + ' left the chat.'))
    })
    socket.on('online', function (connections) {
      var names = ''
      console.log('Connections: ', connections)
      for (var i = 0; i < connections.length; ++i) {
        if (connections[i].user) {
          if (i > 0) {
            if (i == connections.length - 1) names += ' and '
            else names += ', '
          }
          names += connections[i].user.name
        }
      }
      $('#connected').text(names).addClass('online')
    })
  }
})
