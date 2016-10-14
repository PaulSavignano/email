import ReactDOMServer from 'react-dom/server'
import { Email } from 'meteor/email'

let module

const sendEmail = (html, props) => {
  console.log(props.email.to)
  module.resolve(html,
    Email.send({
      to: props.email.to,
      from: props.email.from,
      subject: props.email.subject,
      html: html,
    })
  )
}

const getComponentAsHTML = (component, props) => {
  try {
    return ReactDOMServer.renderToStaticMarkup(component(props))
  } catch (exception) {
    module.reject(exception)
  }
}

const handler = ({ component, props }, promise) => {
  module = promise
  const html = getComponentAsHTML(component, props)
  if (html) sendEmail(html, props)
}

export const generateEmail = (options) => {
  return new Promise((resolve, reject) => {
    return handler(options, { resolve, reject })
  })
}
