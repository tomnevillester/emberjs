import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

	actions: {
		createTodo(data) {
			let that = this;

			$.ajax({
				data: JSON.stringify({title: data}),
				method: 'POST',
				contentType: "application/json; charset=utf-8",
    			dataType: "json",
				url: '/api/todos',
				success: function(response) {		
					response.data.type = 'todo';		
					that.store.push(response);
				}
			});
		}
	}

});
