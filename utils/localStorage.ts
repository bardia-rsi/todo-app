"use client";

const get = <T>(key: string): T | null => {

    if (typeof window === "undefined") {
        return null;
    }

    const cachedItem: string | null = localStorage.getItem(key);

    return cachedItem ? JSON.parse(cachedItem) : null;

}

const cache = <T>(key: string, value: T): void => {

    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem(key, JSON.stringify(value));

}

export { get, cache };