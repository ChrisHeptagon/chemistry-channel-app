'use client';

import React from "react"

export default function Dropdown(){
    const [isOpen, setIsOpen] = React.useState(false)
    var dropdown
    if (isOpen === true) {
        dropdown = "block"
    } else if (isOpen === false) {
        dropdown = "hidden"
    }
    
    return (
        <div className=" overflow-hidden bg-[#333] font-mono">
            <div className="float-left overflow-hidden">
                <button className="items-center inline-block justify-between w-full px-4 py-2 text-sm font-medium text-white bg-[#333] border border-transparent rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" onClick={() => setIsOpen(!isOpen)}>
                    Dropdown 
                    <svg className="-mr-1 ml-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="absolute bg-[#f9f9f9] min-w-[160px]">
                    <a href="#" className={dropdown}>Item 1</a>
                    <a href="#" className={dropdown}>Item 2</a>
                    <a href="#" className={dropdown}>Item 3</a>
                    </div>
                    </div>
                    </div>
    )
}

