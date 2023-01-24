import { useState, useEffect, useCallback } from "react";
import { Quote } from "../api";
import IQuoteResponse from "../interfaces/response";

const useFetchQuote = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [quote, setQuote] = useState<IQuoteResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        if (!isNew) {
            return;
        }
        setIsFetching(true);
        setQuote(null);
        setError(null);
        if (!quote && !error) {
            Quote.getQuote()
                .then((data) => setQuote(data))
                .catch((err) => setError(err))
                .finally(() => {
                    setIsFetching(false);
                    setIsNew(false);
                });
        }
    }, [quote, isNew]);

    const getQuote = () => setIsNew(true);

    return { isFetching, quote, error, getQuote };
};

export default useFetchQuote;
