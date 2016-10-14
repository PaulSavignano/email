import { createContainer } from 'meteor/react-meteor-data'
import { Emails } from '../../api/emails/emails'
import { EmailsList } from '../components/emails-list'
import { Meteor } from 'meteor/meteor'

export default createContainer(() => {
  const subscription = Meteor.subscribe('emails')
  const loading = !subscription.ready()
  const emails = Emails.find().fetch()
  return { loading, emails }
}, EmailsList)
