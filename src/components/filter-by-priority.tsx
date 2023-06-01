import { useState } from "react";
import { ArrowIcon } from "./arrow-icon";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

interface FilterByPriorityProps {

}

export function FilterByPrioryty(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <div className="flex items-center relative">
            <button onClick={handleOpen} className="flex border-none bg-transparent cursor-pointer items-center justify-center font-sans font-normal text-sm text-text-dark mr-10">
                Organizar por:
                <div className="ml-4">
                    <ArrowIcon />
                </div>

                {isOpen && <ul className="absolute text-left w-64 bg-white box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1) rounded-md py-3 px-4 z-999 top-full">
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)} className="text-text-dark font-normal text-sm cursor-pointer">Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)} className="text-text-dark font-normal text-sm cursor-pointer mt-1">Preço: Maior - menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)} className="text-text-dark font-normal text-sm cursor-pointer mt-1">Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)} className="text-text-dark font-normal text-sm cursor-pointer">Mais vendidos</li>
                </ul>}
            </button>
        </div>
    )
}