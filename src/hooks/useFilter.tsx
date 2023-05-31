import { FilterContext } from "@/components/contexts/filter-context";
import { useContext } from "react";

export function useFilter() {
    return useContext(FilterContext)
}