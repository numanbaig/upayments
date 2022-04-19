import React from "react";

type IProps = {
    placeholder: string,
    onChange: (event: any) => void,
    name: string,
    iserror: boolean | undefined,
    error: string | undefined
}

const TextArea = ({ placeholder, onChange, name, iserror = false, error }: IProps) => {

    return (
        <>
            <div className="flex justify-center">
                <textarea
                    onChange={onChange}
                    name={name}
                    className="
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
                    "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder={placeholder}
                />
            </div >
            {iserror && <div className="text-xs text-red-400" id="feedback">{error}</div>}
        </>
    )
};

export default TextArea