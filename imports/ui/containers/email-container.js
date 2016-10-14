import { createContainer } from 'meteor/react-meteor-data'
import { Emails } from '../../api/emails/emails'
import { Email } from '../components/email'
import { Meteor } from 'meteor/meteor'

export default createContainer(({ params }) => {
  const { emailId } = params
  const subscription = Meteor.subscribe('emails')
  const loading = !subscription.ready()
  const emailFetch = Emails.find({_id: emailId}).fetch()
  const email = emailFetch[0]
  return { loading, email }
}, Email)
