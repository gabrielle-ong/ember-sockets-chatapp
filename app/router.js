import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('chat-list');
});

export default Router;
