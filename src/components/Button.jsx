import React from 'react'

const Button = ({styles}) => {
  return (
    <button 
      type='button' 
      className={`bg-blue-gradient px-6 py-4 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}> 
      Get started 
    </button>
  )
}

export default Button   