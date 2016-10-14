import { Meteor } from 'meteor/meteor';
import { Emails } from '../emails';

Meteor.publish('emails', () => Emails.find());
