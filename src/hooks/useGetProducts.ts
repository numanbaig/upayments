import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const useGetProducts = () => {
    const { data, isLoading } = useQuery(
        'products', () => axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
    );
    return {
        data: data?.data,
        isLoading
    }
}