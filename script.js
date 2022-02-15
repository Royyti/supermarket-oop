var StaffMember = /** @class */ ( function ()
{
    function StaffMember ( role )
    {
        this.role = role;
    }
    return StaffMember;
}() );
//export { StaffMember };
var Consumer = /** @class */ ( function ()
{
    function Consumer ( isClubMember )
    {
        this.isClubMember = isClubMember;
    }
    return Consumer;
}() );
//export { Consumer };
var Products = /** @class */ ( function ()
{
    function Products ( price, name, brand, barcode )
    {
        this.price = price;
        this.name = name;
        this.brand = brand;
        this.barcode = barcode;
    }
    return Products;
}() );
//export { Products };
//import { Products } from "./products";
//import { StaffMember } from "./stuffmember";
var CashRegister = /** @class */ ( function ()
{
    function CashRegister ( worker )
    {
        this.cashID = CashRegister.cashIdCounter;
        CashRegister.cashIdCounter++;
        this.products = [];
        this.worker = worker;
    }
    CashRegister.cashIdCounter = 1;
    return CashRegister;
}() );
//export { CashRegister };
//import { CashRegister } from "./cashregister";
/*export function buildBill ()
{*/
//let billCash = null;
//export
function changeWorker ( standArr, cashiers )
{
    standArr.worker.role = cashiers;
    return standArr
}
//export 
function startNewPurchase ( stands )
{
    if ( stands.products.length == 0 )
    {
    }
    else
    {
        alert( "ERROR!!! In the middle of another bill" );
    }
}
//export 
function addProduct ( stands, products )
{
    stands.products.push( products );
}
//export 
function endPurchase ( stands, consumer )
{
    var arrPrice = stands.products.map( function ( p ) { return p.price; } );
    var totalBill = arrPrice.reduce( function ( a, b ) { return a + b; }, 0 );
    stands.products = [];
    return totalBill;
}
//import { Consumer } from "./consumer";
//import { buildBill } from "./script"
var products = [
    new Products( 100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43' ),
    new Products( 7, 'Bread', 'Angel', 'sdfsdf34frv34' )
];
var cashiers = [
    new StaffMember( 'cashier1' ),
    new StaffMember( 'cashier2' )
];
var stands = [
    new CashRegister( cashiers[ 0 ] ),
    new CashRegister( cashiers[ 1 ] )
];
console.log( stands );
//var start = buildBill();
changeWorker( stands[ 0 ], cashiers[ 1 ] );
console.log( stands )
startNewPurchase( stands[ 0 ] )
addProduct( stands[ 0 ], products[ 1 ] )
addProduct( stands[ 0 ], products[ 1 ] )
addProduct( stands[ 0 ], products[ 0 ] )
//startNewPurchase( stands[ 0 ] )
var bill1 = endPurchase( stands[ 0 ], consumer );
console.log( bill1 );
stands[ 0 ].changeWorker( cashiers[ 1 ] );
stands[ 1 ].changeWorker( cashiers[ 0 ] );
stands[ 0 ].startNewPurchase();
stands[ 0 ].addProduct( products[ 1 ] );
stands[ 0 ].addProduct( products[ 1 ] );
stands[ 0 ].addProduct( products[ 0 ] );
stands[ 0 ].startNewPurchase(); // ERROR!!! In the middle of another bill
var consumer = new Consumer( true );
var bill = stands[ 0 ].endPurchase( consumer );
console.log( bill ); //114