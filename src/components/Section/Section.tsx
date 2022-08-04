import './Section.scss'
import React, { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode
  title?: string
}

const Section = (props: SectionProps) => {
    return (
        <section className="section-fragment">
            {props.title && <h2 className='section-title'>{props.title}</h2>}
           {props.children}
        </section>
    )
}

export default Section
