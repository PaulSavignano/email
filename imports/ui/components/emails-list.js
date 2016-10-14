import React from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Button, Alert } from 'react-bootstrap'
import { removeEmail } from '../../api/emails/methods'

const handleRemoveEmail = (event) => {
  event.preventDefault()
  const emailId = event.target.getAttribute('data-id')
  removeEmail.call({
    _id: emailId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Email removed.', 'success')
    }
  })
}

export const EmailsList = ({ emails }) => (
  emails.length > 0 ?
  <ListGroup>
    {emails.map((email) => {
      const url = `/emails/${email._id}`
      return (
        <ListGroupItem key={ email._id } className="clearfix">
          <Link to={ url }>Email to { email.to }</Link>
          <Button onClick={ handleRemoveEmail } data-id={ email._id } bsStyle="danger" className="pull-right">Remove</Button>
        </ListGroupItem>
      )
    })}
  </ListGroup> :
  <Alert bsStyle="warning">No emails yet.</Alert>
);

EmailsList.propTypes = {
  emails: React.PropTypes.array,
};
