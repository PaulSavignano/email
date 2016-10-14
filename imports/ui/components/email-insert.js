import React from 'react'
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertEmail } from '../../api/emails/methods'

const handleInsertEmail = (event) => {
  event.preventDefault()
  insertEmail.call({
  }, (error, result) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      browserHistory.push(`/emails/${result}`)
    }
  })
}

export const EmailInsert = () => (
  <Button onClick={ handleInsertEmail } bsStyle="success">Add Email</Button>
)
