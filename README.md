# supermarket-oop
## Tests
run test with `npm run test` command

## Classes:
- `CashRegister` (`cashId`, `products: Product[]`, `worker: StaffMember`)
  - `private static cashIdCounter: number = 1;`
- `Consumer` (`isClubMember`)
- `IPerson` - interface 
- `Product` (`price`, `name`, `brand`, `barcode`)
- `StaffMember` (`role`)

### Class Logic
#### CashRegister
Every cash machine has unique id (`cashId` property), and the machine unique id assiged when you contruct the `CashRegister` object. assign the `cashIdCounter` static property to `cashId` and increment `cashIdCounter` by 1.

you can use `map` and `reduce` inside the function `endPurchase` to calculate the total.

## Inheritance:
`StaffMember` and `Consumer` inherit `IPerson`

 cashId: number;
    products?: Product[];
    ;
