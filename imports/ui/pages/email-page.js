import React from 'react'
import { PageHeader, Row, Col } from 'react-bootstrap'
import Email from '../containers/email-container'

export const EmailPage = ({ params }) => {
  console.log(params)
  return (
    <Row>
      <Col xs={ 12 }>
        <Email params={ params } />
      </Col>
    </Row>
  )
}
