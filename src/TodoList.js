import React, { Component } from 'react'
import { Row, Form, Col,ListGroup, ListGroupItem, Container, Button, InputGroup } from 'react-bootstrap';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoItem : "",
            todoList:[]
        }
    }
    addItem=()=>{
        if(this.state.todoItem !== '' ){
            const item = {
              id :  Math.random(),
              value : this.state.todoItem
            };
            const list = [...this.state.todoList];
            list.push(item);
            this.setState({
              todoList :list,
              todoItem:""
            });
          }
    }
    updateItemState=(event)=>{
        this.setState({[event.target.name] : event.target.value});
    }
    deleteItem(itemToDelete){
        const list = [...this.state.todoList];
        const updatedList = list.filter(item => item.id !== itemToDelete);
        this.setState({
            todoList:updatedList,
        });
    }
    render(){
        return (
            <div>
                <Container>
                    <Row md={16}>TO DO List</Row>
                    <Row>
                    <Col md={4}>
                    <InputGroup>
                        <Form.Control id="todoItem" name="todoItem" type="text" onChange={this.updateItemState} />
                        <Button id="Add" onClick={this.addItem}>Add</Button>
                    </InputGroup>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4}>
                        <ListGroup >
                            {this.state.todoList.map((item) => {
                                    return <ListGroupItem key={item.id} variant="info" action onClick = { () => this.deleteItem(item.id) }>
                                            {item.value}
                                            </ListGroupItem>})}    
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TodoList;