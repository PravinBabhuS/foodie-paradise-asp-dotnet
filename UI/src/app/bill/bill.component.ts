import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../Auth/token-storage.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  OrderNo1: number = 0;

  PartTotal: number = 0;

  constructor(
    private service: SharedService,
    private token: TokenStorageService,
    private router: Router
  ) {}

  BillList: any = [];
  CurrentUserId = this.token.getUser().Loginid;
  CurrentUser = this.token.getUser();

  subTot: number = 0;
  Tot: number = 0;
  ngOnInit(): void {
    this.refreshBillList();
  }

  getTotal() {
    return this.BillList.reduce(
      (sum: number, current: any) => sum + current.BillingAmount,
      0
    );
  }

  refreshBillList() {
    this.service
      .getBillingDetail1(this.CurrentUserId)
      .subscribe((data) => (this.BillList = data));
  }
  removeFromOrderWC(item1: any) {
    this.OrderNo1 = item1.OrderNo;

    this.service.deleteOrderItem(this.OrderNo1).subscribe((data) => {
      console.log(data.toString());

      this.refreshBillList();
    });
  }

  proceedBill() {
    this.BillList.forEach((order: any) => {
      this.PartTotal = order.Price * order.Quantity;

      let orders = {
        UserId: this.CurrentUserId,

        FoodName: order.FoodName,

        Quantity: order.Quantity,

        Price: this.PartTotal,


      };
      alert("Your purchase is successful");
      this.removeFromOrderWC(order);
    });

    this.router.navigate(['/Login']);

    this.refreshBillList();
  }
}
