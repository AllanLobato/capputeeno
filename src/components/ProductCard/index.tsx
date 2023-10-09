import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/utils/money";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: number;
    id: string;
}

export function ProductCard(props : ProductCardProps) {
   const price = formatMoney(props.price);
    return (
        <Link href={`/product/${props.id}`} passHref>
            <div>
                <Image
                    className="flex flex-col rounded-t-lg  cursor-pointer bg-white ml-3 mt-3 backdrop-blur-md"
                    src={props.imageUrl}
                    alt={`imagem ${name}`}
                    width={256}
                    height={300}
                    layout="instrinsic"
                />
            </div>
            <div className="flex-1 h-{78} pb-3 ml-3 rounded-sm bg-white align-middle">
                <p className="font-sans pt-3 pl-3">{props.name}</p>
                <strong className="font-sans pt-3 pl-3">{price}</strong>
            </div>
        </Link>
    );
}


