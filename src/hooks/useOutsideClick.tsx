import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutClick(e: MouseEvent) {
            const target = e.target as HTMLDivElement;
            if (!ref.current?.contains(target)) {
                callback();
            }
        }
    }, [])

    return ref
}