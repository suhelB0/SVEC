import React from 'react'
import AndhraBank from './AndhraBank'
import Corporation from './Corporation'

export default function UnionBank() {
    return (
        <div>
            <h1>UnionBank</h1>
            <Corporation location="Tirupathi"/>
            <AndhraBank location="Vijayawada"/>
        </div>
    )
}
