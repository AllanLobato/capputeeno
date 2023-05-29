import { useState } from 'react';

export function useLocalStorage<T>(item: string) {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(item);
            return storedValue ? JSON.parse(storedValue) : '';
        }
        return '';
    });

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return { value, updateLocalStorage };
}