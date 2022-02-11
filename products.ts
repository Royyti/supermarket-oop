export class Products {
    price: number;
    name: string;
    brand: string;
    barcode: number;
    constructor(price: number, name: string, brand: string, barcode: number) {
        this.price = price;
        this.name = name;
        this.brand = brand;
        this.barcode = barcode;
    }
}
