import * as React from "react"


const Button = ({ className, ...props } :{ className : string} ) => {
    return (
      <button
        className={className}
        {...props}
      />
    )
  }


export default Button 