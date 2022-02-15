import { CashRegister } from "./cashregister";
/*export function buildBill ()
{*/
//let billCash = null;
export function changeWorker ( standArr, cashiers )
{
    standArr.worker.role = cashiers;
}
export function startNewPurchase ( stands )
{
    if ( stands.products.length == 0 )
    {

    }

    else
    {
        alert( "ERROR!!! In the middle of another bill" )
    }
}
export function addProduct ( stands, products )
{
    stands.products.push( products )
}
export function endPurchase ( stands, consumer )
{
    var arrPrice = stands.products.map( p => p.price );
    var totalBill: number = arrPrice.reduce( ( a: number, b: number ) => a + b, 0 )
    stands.products = [];
    return totalBill

}
  /*  return {
changeWorker: changeWorker,
startNewPurchase: startNewPurchase,
addProduct: addProduct,
endPurchase: endPurchase

}
}*/

