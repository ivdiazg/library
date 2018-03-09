import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClientModel } from '../../model/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  actionTitle: string;
  clientModel: ClientModel;

  constructor() { }

  ngOnInit() {
    this.actionTitle = 'Agregar';
    this.clientModel = new ClientModel;
    this.clientModel.vigente = true;
  }

  saveClient() {

    console.log(this.clientModel);
  }

}

