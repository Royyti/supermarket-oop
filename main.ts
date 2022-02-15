import { CashRegister } from "./cashregister";
import { Consumer } from "./consumer";
import { Products } from "./products";
import { StaffMember } from "./stuffmember";
import { changeWorker } from "./script";
import { startNewPurchase } from "./script";
import { addProduct } from "./script";
import { endPurchase } from "./script";
//import { buildBill } from "./script"
const products: Products[] = [
    new Products( 100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43' ),
    new Products( 7, 'Bread', 'Angel', 'sdfsdf34frv34' )
]

const cashiers: StaffMember[] = [
    new StaffMember( 'cashier' ),
    new StaffMember( 'cashier' )
]

const stands: CashRegister[] = [
    new CashRegister( cashiers[ 0 ] ),
    new CashRegister( cashiers[ 1 ] )
];

console.log( stands )
//var start = buildBill();



stands[ 0 ].changeWorker( cashiers[ 1 ] );
stands[ 1 ].changeWorker( cashiers[ 0 ] );

stands[ 0 ].startNewPurchase();

stands[ 0 ].addProduct( products[ 1 ] );
stands[ 0 ].addProduct( products[ 1 ] );
stands[ 0 ].addProduct( products[ 0 ] );

stands[ 0 ].startNewPurchase(); // ERROR!!! In the middle of another bill


const consumer = new Consumer( true );
const bill = stands[ 0 ].endPurchase( consumer );
console.log( bill ) //114

