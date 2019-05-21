import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import Task from './tasks'

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          tasks: 
          [
            {task: 'wrote a report', date: '04/05/2019' }, 
            {task: 'learnt code', date: '05/05/2019'}
          ],
          newTask: '',
          usedDates: [],
          message: ''
         }
      }
    
      handleChange = (e) => {
        this.setState({ newTask: e.target.value });
      }
    
      addTask(newTaskObj) {
        const { usedDates } = this.state;
        this.setState((prevState) => {
            this.setState({ usedDates: [...usedDates, newTaskObj.date] })
            const isDateOnList = usedDates.includes(newTaskObj.date);
            if(isDateOnList) {
              this.setState({ message: 'You can\'t add any new tasks today' })
          } else {
            return {
              tasks: prevState.tasks.concat(newTaskObj),
              message: ''
            }
          } 
      })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { newTask } = this.state;
        if (newTask.trim() !== '') {
          const newTaskObj = {
            task: newTask,
            date: moment(new Date()).format("DD/MM/YYYY")
          };
          this.addTask(newTaskObj);
        }
      }
    
      render() { 
        const { tasks } = this.state
        return ( 
        <React.Fragment>
          <div className="container">
            <header>      
              <h1>Today's List</h1>
              <form onSubmit={ this.handleSubmit }>
                <div 
                  className="form-group">
                  <label 
                    htmlFor="newInputTask" 
                    className="sr-only">Add New Todo</label>
                  <input 
                    onChange={ this.handleChange }
                    type="text" 
                    placeholder="e.g. built a blog" 
                    className="form-control"/>
                    { this.state.message.length > 0 ? <p class="alert alert-danger">{this.state.message}</p> : null }
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary">
                    Save
                  </button>
              </form>
            </header>
    
            <Task tasks={tasks} />
          </div>
        </React.Fragment>
        )}
}
 
export default TaskInput;