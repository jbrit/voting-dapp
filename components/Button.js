import React from 'react'

function Button({
    children,
    className="",
    disabled=false,
    outline=false,
    onClick=()=>{},
    color="primary",
    width="w-60",
    size="default"
    }) {
    let padding = "p-3"
    if(size="sm"){
        width = ""
        padding="px-5 py-2"
    }

    if(outline){
        return (
            <button onClick={onClick} disabled={disabled} 
            className={`rounded-md border border-${color} ${width} text-${color} ${padding} ${className}`}>
                {children}
            </button>
        )
    }else{
        return (
            <button onClick={onClick} disabled={disabled} 
            className={`rounded-md bg-${color} ${width} text-white ${padding} ${className}`}>
                {children}
            </button>
        )
    }
    
}

export default Button
