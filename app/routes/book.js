import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		window.location.replace("http://www.audibletrial.com/Careerjs");
	}
});
