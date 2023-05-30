export class Purchase {
    id: number;
    product_id: number;
    invoice_no: number;
    note: string;
    total_price:number;
    date:number

    constructor(id = 0, product_id = 0, note = '', invoice_no = 0, total_price = 0, date = 0) {
        this.id = id;
        this.product_id = product_id;
        this.invoice_no = invoice_no;
        this.note = note;
        this.total_price = total_price;
        this.date = date;
    }
}