import React from 'react'

export default function Compose({items, children}) {
    return items.reduceRight((acc, [Context, props]) => React.createElement(Context.Provider, props, acc), children)
}
