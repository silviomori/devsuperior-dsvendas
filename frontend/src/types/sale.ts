import { SellerDTO } from "./seller"

export type SaleDTO = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: SellerDTO;
}

export type SalePageDTO = {
    content?: SaleDTO[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSumDTO = {
    sellerName: string;
    sum: number;
}

export type SaleSuccessDTO = {
    sellerName: string;
    visited: number;
    deals: number;
}
