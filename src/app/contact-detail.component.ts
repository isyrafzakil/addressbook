import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: [ './contact-detail.component.css' ],
})

export class ContactDetailComponent implements OnInit {
  // @Input() contact: Contact;

  contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.contactService.getContact(+params['id']))
    .subscribe(contact => this.contact = contact);
  }

  save(): void {
  this.contactService.update(this.contact)
    .then(() => this.goBack());
  }

  goBack(): void {
  this.location.back();
  }
  

}

