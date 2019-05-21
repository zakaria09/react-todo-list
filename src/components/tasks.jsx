import React, { Component } from 'react';

class Tasks extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="content">
                <table className="table">
                    <caption>Today's List</caption>
                    <thead>
                        <tr>
                        <th scope="col">task</th>
                        <th scope="col">date</th>
                        </tr>
                    </thead>
                    
                    {
                        this.props.tasks.map(item => {
                        return ( 
                            <tbody>
                            <tr>
                                <td>{item.task}</td>
                                <td>{item.date}</td>
                            </tr>
                            </tbody>
                        );
                        })
                    }

                    {
                        this.props.tags.map(tag => {
                          return <span class="badge badge-success m-2">{tag}</span> 
                        })
                    }
                    
                </table>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Tasks;