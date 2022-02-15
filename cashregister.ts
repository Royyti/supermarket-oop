import { Products } from "./products"
import { StaffMember } from "./stuffmember"
export class CashRegister
{
    private static cashIdCounter: number = 1;
    cashID: number;
    products: Products[];
    worker: StaffMember;

    constructor ( worker: StaffMember )
    {
        this.cashID = CashRegister.cashIdCounter;
        CashRegister.cashIdCounter++
        this.products = [];
        this.worker = worker;
    }
}
