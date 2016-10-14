import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Emails } from './emails'

export const insertEmail = new ValidatedMethod({
  name: 'emails.insert',
  validate: new SimpleSchema({}).validator(),
  run() {
    console.log('inside email insert')
    return Emails.insert({
      to: 'paul.savignano@gmail.com',
      from: 'testing@testing.com',
      subject: 'A Test Email',
      message: 'Hello from an email test.',
    })
  },
})

export const updateEmail = new ValidatedMethod({
  name: 'emails.update',
  validate: new SimpleSchema({
    _id: { type: String },
    to: { type: String, optional: true },
    from: { type: String, optional: true },
    subject: { type: String, optional: true },
    message: { type: String, optional: true },
  }).validator(),
  run({ _id, to, subject, message }) {
    Emails.update(_id, { $set: { to, subject, message } })
  },
})

export const removeEmail = new ValidatedMethod({
  name: 'emails.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Emails.remove(_id)
  },
})
