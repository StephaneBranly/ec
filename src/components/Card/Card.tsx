import './Card.scss'
import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode
}

const Card = (props: CardProps) => {
    return (
        <section className="card-fragment">
           {props.children}
        </section>
    )
}

export default Card
