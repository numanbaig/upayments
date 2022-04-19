import react from "react";
import { useMutation } from "react-query";
import axios from "axios";

export const useGetCategory = () => {
    const { mutate, data, isLoading } = useMutation((id: string) => axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/${id}`)
    );
    return {
        getCategory: mutate,
        data,
        isLoading
    }
}