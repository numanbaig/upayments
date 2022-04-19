import React, { ReactChild } from "react";

type cardProps = {
    children: ReactChild,
    className?: string
}

const Card = ({ children, className }: cardProps) => {

    return (
        <div className={`${className} block p-4 rounded-lg shadow-lg bg-white`}>
            {children}
        </div>

    )
};
export default Card