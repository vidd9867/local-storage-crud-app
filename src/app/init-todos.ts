export class Init {
  load() {
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
      console.log('No Todos Found... Creating...');
      let todos = [
        {
          text: 'Meal Prep'
        }, 
        {
          text: 'Hit the gym'
        }, 
        {
          text: 'Write some flawless code'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return 
    } else {
      console.log('Found Todos...');
    }
  }
}