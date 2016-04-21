import Ember from 'ember'
var check = 0
export default Ember.Component.extend({
  actions: {
    joinChat() {
      var socket = io.connect('http://ff-chat-app.herokuapp.com/')

      var user = {
        name: 'anon'
      }
      user.name = $('#n').val()
      console.log(user.name + 'joined!')
      socket.emit('join', user)
      $('.messages').append($('<li class="joinMsg">').text(user.name + ' joined!').addClass('joinMsg'))
      $('#msgForm').show()
      $('#joinForm').hide()
    },
    sendMsg() {
      var socket = io.connect('http://ff-chat-app.herokuapp.com/')

      var inputVal = $('#m').val()
      console.log(inputVal)
      socket.emit('chat', inputVal)
      $('.messages').append($('<li>').text($('#n').val() + ' says: ' + inputVal).addClass('ownMsg'))
      inputVal = $('#m').val('')
    }
  }
})
