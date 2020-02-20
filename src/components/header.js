import React from "react"
import { checkPropTypes } from "prop-types"

/**
 * This is for the headers
*/
function headerText(props) {
    return (
        <div>
            <h1 class = "text-center">{props.headerText}</h1>
        </div>
    )
}

export default headerText