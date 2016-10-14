import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Emails = new Mongo.Collection('Emails');

Emails.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Emails.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Emails.schema = new SimpleSchema({
  to: {
    type: String,
    label: 'The to of the email.',
  },
  from: {
    type: String,
    label: 'The from of the email.',
  },
  subject: {
    type: String,
    label: 'The subject of the email.',
  },
  message: {
    type: String,
    label: 'The message of the email.',
  },
})

Emails.attachSchema(Emails.schema)
