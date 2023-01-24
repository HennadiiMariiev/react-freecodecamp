import axios, { AxiosResponse } from "axios";
import IQuoteResponse from "../interfaces/response";

const URL = 'https://quotes15.p.rapidapi.com/quotes/random/'
const API_KEY = "4dce3c46edmshd7ac5b0245fcad9p14d63ejsnf00486cd2816";
const HOST = "quotes15.p.rapidapi.com'"

const instance = axios.create({
    baseURL: URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': HOST
    }
});

const responseBody = (response: AxiosResponse) => response.data

const quoteRequest = {
    get: () => instance.get<IQuoteResponse>('/').then(responseBody),
}

export const Quote = {
    getQuote: (): Promise<IQuoteResponse> => quoteRequest.get(),
} 