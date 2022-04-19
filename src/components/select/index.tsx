import React from "react";

type IOptions = {
    createdAt: string,
    id: string,
    name: string
}

type ISelect = {
    options: IOptions[],
    placeholder: string,
    onChange: (e: any) => void,
    iserror?: boolean,
    error?: string | undefined
}

const Select = ({ options, placeholder, onChange, iserror = false, error }: ISelect) => {

    return (
        <>
            <div className="flex justify-center">

                <select
                    onChange={onChange}
                    className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300 
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example">
                    <option selected>{placeholder}</option>
                    {options?.map((option, index) => {
                        return (
                            <option value={option?.id} key={index}>{option?.name}</option>
                        )
                    })}
                </select>
            </div>
            {iserror && <div className="text-xs text-red-400" id="feedback">{error}</div>}
        </>
    );
};
export default Select;


