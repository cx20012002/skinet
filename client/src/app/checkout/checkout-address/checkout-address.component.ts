import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountService} from "../../account/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  saveUserAddress() {
    let addressFormValue = this.checkoutForm.get('addressForm').value;
    this.accountService.updateUserAddress(addressFormValue).subscribe(() => {
      this.toastr.success('Address saved');
      this.checkoutForm.get('addressForm').reset(addressFormValue)
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    })
  }

}
