import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  const contacts = await readFile(PATH_DB, 'utf-8');
  const contactsData = contacts ? JSON.parse(contacts) : [];
  return contactsData;
};
