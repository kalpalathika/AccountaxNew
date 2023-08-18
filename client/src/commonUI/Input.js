import React from "react"


export const Input = ({onChange,value, ...props}) => {
    return (<React.Fragment>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm outline-none p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                        onChange={(e)=> onChange && onChange(e)}
                        value={value}
                        {...props}
                      />
                      </React.Fragment>

    )
}