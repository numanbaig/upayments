import { Formik } from "formik";
import React, { useEffect } from "react";
import Select from "../../components/select";
import TextArea from "../../components/textArea";
import TextInput from "../../components/textInput";
import * as yup from 'yup';
import { useGetCategories } from "../../hooks/useGetCategories";
import { usePostAddProduct } from "../../hooks/usePostAddProduct"
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";



type IInitialValues = {
    product_name: string,
    description: string,
    image_url: string,
    price: number,
    category: string
}

const CreateProduct = () => {
    const navigate = useNavigate();
    const { data: Categories, isLoading: categoryLoading } = useGetCategories()
    const { createProduct, isLoading, isSuccess } = usePostAddProduct()
    const schema = yup.object().shape({
        product_name: yup.string().required(),
        description: yup.string().required(),
        image_url: yup.string().url().required(),
        price: yup.number().positive().integer().required(),
        category: yup.string().required()
    })

    const initialValues: IInitialValues = {
        product_name: '',
        description: '',
        image_url: '',
        price: 0,
        category: ''
    };

    const handleFormSubmit = (value: IInitialValues) => {
        createProduct(value)
    }


    useEffect(() => {
        if (isSuccess) {
            navigate('/')
        }

    }, [isSuccess])

    return (
        <div className="max-w-[40%] mx-auto mt-20 ">
            <h2 className="text-center mb-3 font-bold text-xl" >
                Create Product
            </h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={schema}
            >
                {props => (
                    <form className="flex flex-col row gap-y-3 " onSubmit={props.handleSubmit}>
                        <TextInput
                            type={'text'}
                            placeholder={'Product Name'}
                            name={'product_name'}
                            onChange={props.handleChange}
                            iserror={props.touched?.product_name && props.errors?.product_name}
                            error={props.errors?.product_name}
                        />
                        <TextArea
                            placeholder="Description"
                            name={'description'}
                            onChange={props.handleChange}
                            iserror={props.touched.description && props.errors.description ? true : false}
                            error={props.errors?.description}

                        />
                        <TextInput
                            type={'url'}
                            placeholder={'Image URL'}
                            name={'image_url'}
                            onChange={props.handleChange}
                            iserror={props.touched?.image_url && props.errors?.image_url}
                            error={props.errors?.image_url}

                        />
                        <Select
                            options={Categories}
                            placeholder='Category'
                            onChange={(e) => props.setFieldValue('category', e.target.value)}
                            iserror={props.touched?.category && props.errors?.category ? true : false}
                            error={props.errors?.category}
                        />

                        <TextInput
                            type={'number'}
                            placeholder={'Price'}
                            name={'price'}
                            onChange={props.handleChange}
                            iserror={props.touched?.price && props.errors?.price}
                            error={props.errors?.price}
                        />
                        <div className="mt-5">
                            {isLoading ? <Loader /> : <TextInput type={'submit'} placeholder={'SUBMIT'} className='w-full' />}
                        </div>
                    </form>
                )}
            </Formik>
        </div>

    )
};
export default CreateProduct;