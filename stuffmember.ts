import { IPerson } from "./iperson";
export class StaffMember implements IPerson {
    role: "cashier";
    constructor(role: "cashier") {
        this.role = role
    }
}
