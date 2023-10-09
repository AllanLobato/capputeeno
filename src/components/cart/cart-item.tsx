import { ProductInCart } from "@/types/product"
import { formatMoney } from "@/utils/money"
import Image from "next/image"
import { ChangeEvent } from "react"
import { DeleteIcon } from "../icons/delete-icon"

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity(id: string, quantity: number): void
    handleDelete(id: string): void
}

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }

    return (
        <li className="flex items-center justify-center h-210px rounded-8 bg-white relative">
            <button
                onClick={() => handleDelete(product.id)}
                aria-label="Deletar"
                className="absolute top-16px right-24px border-none bg-transparent cursor-pointer"
            >
                <DeleteIcon/>
            </button>
            <Image
                src={product.image_url}
                alt={product.name}
                className="max-h-full w-256px rounded-8px 0 0 8px"
            />
            <div className="flex w-100% h-100% items-start justify-between flex-col px-16px py-16px text-text-dark-2">
                <h4 className="font-light text-20px">{product.name}</h4>
                <p className="font-normal text-12px max-h-50% overflow-hidden overflow-ellipsis">
                    {product.description}
                </p>
                <div className="flex items-center justify-between w-100%">
                    <select
                        value={product.quantity}
                        onChange={handleChange}
                        className="px-8px border-1.5px border-border-color rounded-8 bg-bg-secondary text-text-dark font-normal text-16px"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <span className="font-semibold text-16px text-shapes-dark">
                        {formatMoney(product.price_in_cents)}
                    </span>
                </div>
            </div>
        </li>
    )
}
