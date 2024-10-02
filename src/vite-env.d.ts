/// <reference types="vite/client" />

type LangType = "hi" | "es" | "fr" | "ar" | "pt" | "bg" | "ru" | "ja" | "de" | "ko" | "te" | "tr" | "ta" | "mr" | "ur" | "vi" | "it" | "fa" | "gu" | "pl";

type WordType = {
    word: string;
    meaning: string;
    options: string[];
}

interface StateType {
    loading: boolean;
    result: string[];
    words: WordType[];
    error?: string;
}