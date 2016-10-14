import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../../modules/rate-limit'
import { Emails } from '../emails'
import { EmailTemplate } from '../../../ui/components/email-template'
import { generateEmail } from '../../../modules/server/generate-email'

export const sendEmail = new ValidatedMethod({
  name: 'emails.send',
  validate: new SimpleSchema({
    emailId: { type: String },
  }).validator(),
  run({ emailId }) {
    const email = Emails.findOne({ _id: emailId })
    return generateEmail({ component: EmailTemplate, props: { email } })
    .then((result) => result)
    .catch((error) => { throw new Meteor.Error('500', error) })
  },
})

rateLimit({
  methods: [
    sendEmail,
  ],
  limit: 1,
  timeRange: 1000,
})
