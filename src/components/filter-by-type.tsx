import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return (
        <ul className="flex items-center justify-center gap-10">
            <li
                className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'All' ? 'border-b-4 border-orange-low font-bold' : ''
                    }`}
                onClick={() => handleChangeType(FilterType.All)}
            >
                Todos os Produtos
            </li>
            <li
                className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'SHIRT' ? 'border-b-4 border-orange-low font-bold' : ''
                    }`}
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </li>
            <li
                className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'MUG' ? 'border-b-4 border-orange-low font-bold' : ''
                    }`}
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </li>
        </ul>
    );
}
