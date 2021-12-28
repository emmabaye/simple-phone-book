class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  addContact({ name, phoneNumber, email }) {
    if(!phoneNumber) {
      throw 'Contact phone number is invalid';
    }

    const contactAlreadyExists = this.getContact(phoneNumber)
    
    if(contactAlreadyExists) {
        throw `Phone number ${phoneNumber} already exists in phone book`;
    }

    this.contacts.push({ name, phoneNumber, email, dateCreated: new Date() });
  }

  getAllContacts() {
      return this.contacts;
  }

  getContact(phoneNumber){
      return this.contacts.find(contact => contact.phoneNumber === phoneNumber)
  }

  removeContact(phoneNumber) {
    this.contacts = this.contacts.filter(contact => contact.phoneNumber !== phoneNumber)
  }
}

// Usage
const simplePhoneBook = new PhoneBook();
simplePhoneBook.addContact({
  name: 'Emmanuel',
  phoneNumber: '07030000001',
  email: 'emmanuel@email.com'
})

simplePhoneBook.addContact({
  name: 'Fred',
  phoneNumber: '07030000002',
  email: 'fred@email.com'
})

simplePhoneBook.addContact({
  name: 'Tim',
  phoneNumber: '07030000003',
  email: 'fred@email.com'
})

simplePhoneBook.removeContact('07030000002')

console.log('Get all contacts ', simplePhoneBook.getAllContacts())
console.log('Get a contact ', simplePhoneBook.getContact('1234'))