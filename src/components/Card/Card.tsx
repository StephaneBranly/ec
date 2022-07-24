import './Card.scss'
import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode
}

const Card = (props: CardProps) => {
    return (
        <div className="card-fragment">
           {props.children}
        </div>
    )
}

export default Card
