import React, { ReactNode } from "react";


type Iprops = {
    type: string,
    placeholder: string | ReactNode,
    iserror: boolean,
    error: string,
    className: string

}

const TextInput = (props: any) => {

    const { type, iserror = false, error, className }: Iprops = props

    return (
        <>
            <div className="flex justify-center">
                <input
                    type={type}
                    id="exampleText0"
                    {...props}
                    className={` ${className} 
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded-md
                        shadow-md
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    `}
                />

            </div>
            {iserror && <div className="text-xs text-red-400" id="feedback">{error}</div>}
        </>
    )
};
export default TextInput;
