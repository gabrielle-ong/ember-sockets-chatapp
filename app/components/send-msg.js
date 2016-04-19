import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
   sendMsg() {
     var inputVal = $('input').val()
     console.log(inputVal)
     var user = {
      name: 'Gab'
     }
     socket.emit("join", user);
     socket.emit("chat", inputVal);
     $('.messages').append($('<li>').text(inputVal));
   }
 }
});
