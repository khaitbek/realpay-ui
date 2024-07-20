import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Button = (props: Props) => {

    return (
    <div>
        {props.children}
    </div>
    
  )
}