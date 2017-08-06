import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import InputGroup  from 'react-bootstrap/lib/InputGroup';


class CommentItem extends Component{
 
  render() {
    return (
      <div className="Comment-item">
        <Button className="btn-Comment">
        </Button>
           <InputGroup>
             <input placeholder="Comment"></input>
           </InputGroup>
      </div>
    );
  }
}
export default CommentItem;


