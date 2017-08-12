import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

import { ContactService } from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.css' ]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  getContacts(): void {
    this.contactService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  add(name: string, mobile: string): void {
    name = name.trim();
    mobile = mobile.trim();

    if (!name) { return; }
    this.contactService.create(name, mobile)
      .then(contact => {
        this.contacts.push(contact);
        this.selectedContact = null;
      });   
  }

  delete(contact: Contact): void {
    this.contactService
        .delete(contact.id)
        .then(() => {
          this.contacts = this.contacts.filter(h => h !== contact);
          if (this.selectedContact === contact) { this.selectedContact = null; }
        });
  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedContact.id]);
  }
  
}
