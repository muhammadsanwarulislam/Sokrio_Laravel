export class Product {
    id: number;
    name: string;
    stock: number;
    price: number;
    unit: string;
    product_code:number;
    user_id:number

    constructor(id = 0, name = '', stock = 0, price = 0, unit = '', product_code = 0, user_id = 0) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.unit = unit;
        this.product_code = product_code;
        this.user_id = user_id;
    }
}