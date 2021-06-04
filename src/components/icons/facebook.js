import React from "react"
import PropTypes from "prop-types"

const Mail = ({ color }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      x="24"
      y="24"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
        <path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
        </g>
      </g>
    </svg>
  )
}

Mail.propTypes = {
  color: PropTypes.string,
}

Mail.defaultProps = {
  color: "#000000",
}

export default Mail