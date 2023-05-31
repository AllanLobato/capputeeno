import { FilterByType } from "./filter-by-type";


interface FilterBarProps {

}

export function FilterBar(props: FilterBarProps) {
    return (
        <div className="flex w-full items-start ml-8 mt-8">
            <FilterByType />
        </div>
    )
}