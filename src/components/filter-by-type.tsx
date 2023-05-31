import { useContext } from "react";
import { FilterContext } from "./contexts/filter-context";

export function FilterByType() {
    const { type, setType } = useContext(FilterContext);

    const handleChangeType = (type: string) => {

        return (
            <ul className="flex items-center justify-center gap-10">
                <li
                    className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'All' ? 'border-b-4 border-orange-low font-bold' : ''
                        }`}
                    onClick={() => setType('All')}
                >
                    Todos os Produtos
                </li>
                <li
                    className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'Camisetas' ? 'border-b-4 border-orange-low font-bold' : ''
                        }`}
                    onClick={() => setType('Camisetas')}
                >
                    Camisetas
                </li>
                <li
                    className={`font-inherit font-normal text-base text-center uppercase text-text-dark hover:border-orange-low cursor-pointer transition-colors duration-200 ${type === 'Canecas' ? 'border-b-4 border-orange-low font-bold' : ''
                        }`}
                    onClick={() => setType('Canecas')}
                >
                    Canecas
                </li>
            </ul>
        );
    }
