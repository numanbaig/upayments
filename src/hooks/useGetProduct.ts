import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const useGetProduct = (id: string) => {
    const { data, isLoading } = useQuery('product', () => axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
    );
    return {
        data: data?.data,
        isLoading
    }
}