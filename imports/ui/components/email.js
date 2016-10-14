import React from 'react'
import { Link, browserHistory } from 'react-router'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { Loading } from './loading'
import { Meteor } from 'meteor/meteor'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateEmail, removeEmail } from '../../api/emails/methods'

const handleSendEmail = (event) => {
  event.preventDefault()
  const emailId = event.target.getAttribute('data-id')
  Meteor.call('emails.send', { emailId }, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Email sent', 'success')
    }
  })
}

const handleUpdateEmail = (event) => {
  event.preventDefault()
  const emailId = event.target.getAttribute('data-id')
  const form = document.querySelector('[name="email-form"]')
  const to = form.querySelector('[name="to"]').innerText
  const from = form.querySelector('[name="from"]').innerText
  const subject = form.querySelector('[name="subject"]').innerText
  const message = form.querySelector('[name="message"]').innerText
  updateEmail.call({
    _id: emailId,
    to,
    from,
    subject,
    message,
  }, (error, result) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Email updated!', 'success')
    }
  })
}

const handleRemoveEmail = (event) => {
  event.preventDefault()
  const emailId = event.target.getAttribute('data-id')
  removeEmail.call({
    _id: emailId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Emailed removed.', 'success')
      browserHistory.push('/emails')
    }
  })
}

const renderEmail = (email) => (
  <div>
    <section className="flex-container email-controls">
      <h1>Email Details</h1>
      <div className="button-group">
        <Button onClick={ handleSendEmail } data-id={ email._id } bsStyle="primary">Send</Button>
        <Button onClick={ handleUpdateEmail } data-id={ email._id } bsStyle="success">Update</Button>
        <Button onClick={ handleRemoveEmail } data-id={ email._id } bsStyle="danger">Remove</Button>
      </div>
    </section>
    <hr/>
    <br/>
    <Form horizontal name="email-form">
      <FormGroup controlId="formHorizontalEmailTo">
        <Col componentClass={ControlLabel} sm={2}>
          To:
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            defaultValue={ email.to }
            name="to"
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmailFrom">
        <Col componentClass={ControlLabel} sm={2}>
          From:
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            defaultValue={ email.from }
            name="from"
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmailSubject">
        <Col componentClass={ControlLabel} sm={2}>
          Subject:
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            defaultValue={ email.subject }
            name="subject"
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmailMessage">
        <Col componentClass={ControlLabel} sm={2}>
          Message:
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            defaultValue={ email.message }
            name="message"
          />
        </Col>
      </FormGroup>
    </Form>
    <br/>
  </div>
)

export const Email = ({ loading, email }) => {
  return loading ? <Loading /> : renderEmail(email)
}

Email.propTypes = {
  email: React.PropTypes.object,
  loading: React.PropTypes.bool,
}
