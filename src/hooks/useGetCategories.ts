import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const useGetCategories = () => {
    const { data, isLoading } = useQuery(
        'categories', () => axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
    );
    return {
        data: data?.data,
        isLoading
    }
}