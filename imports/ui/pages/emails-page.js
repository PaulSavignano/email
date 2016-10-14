import React from 'react'
import { Row, Col } from 'react-bootstrap'
import EmailsList from '../containers/emails-container.js'
import { EmailInsert } from '../components/email-insert.js'

export const EmailsPage = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Emails</h4>
      <EmailInsert />
      <EmailsList />
    </Col>
  </Row>
)
