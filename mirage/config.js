export default function() {

  this.get('/api/todos', function() {
    return {
      data: [
        {
          id:43, 
          type: 'todos',
          attributes: {
            title:'Test abc'
          }
        }, 
        {
          id:41, 
          type: 'todos',
          attributes: {
            title:'Jack abc'
          }
        },
        {
          id:42, 
          type: 'todos',
          attributes: {
            title:'Create abc'
          }
        }
      ]
    }
  });

  this.post('/api/todos', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    let todo = schema.todos.create(attrs);
    todo.type = 'todo';

    return todo;
  });
}