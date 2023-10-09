export interface Product {
    id: string;
    name: string;
    price_in_cents: number;
    image_url: string;

}

export interface ProductInCart extends Product {
    quantity: number
    description: string
}

export interface ProductFetchResponse {
    data: {
        Product: Product
    }
}