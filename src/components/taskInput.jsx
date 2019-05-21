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
          tags: [],
          tagInput: '',
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

      handleInputKeyDown = (e) => {
        if ( e.keyCode === 13 ) {
          e.preventDefault();
          const {value} = e.target;
          
          this.setState(state => ({
            tags: [...state.tags, value],
            tagInput: ''
          }));
        }
    
        if ( this.state.tags.length && e.keyCode === 8 && !this.state.tagInput.length ) {
          this.setState(state => ({
            tags: state.tags.slice(0, state.tags.length - 1)
          }));
        }
      }

      handleTagInput = (e) => {
        this.setState({ tagInput: e.target.value });
      }
    
      render() { 
        const { tasks } = this.state
        const { tags } = this.state

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
                  {tags.map((tag, i) => 
                    <li key={i}>
                      <span class="badge badge-success m-2">{tag}</span>
                    </li>
                  )}
                  <input 
                    onChange={ this.handleTagInput }
                    onKeyDown={ (e) => this.handleInputKeyDown(e)}
                    type="text" 
                    placeholder="Add Tags" 
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
    
            <Task tasks={tasks} tags={tags} />
          </div>
        </React.Fragment>
        )}
}
 
export default TaskInput;