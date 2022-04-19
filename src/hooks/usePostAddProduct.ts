import react from "react";
import { useMutation } from "react-query";
import axios from "axios";

export const usePostAddProduct = () => {
    const { mutate, isLoading, isSuccess } = useMutation((data: any) => axios.post(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`, data)
    );
    return {
        createProduct: mutate,
        isLoading,
        isSuccess
    }
}