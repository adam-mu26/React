import React, { useState } from 'react'

export const UseCount = (initialCount = 0) => {
const [count, setCount] = useState(initialCount)
const addOne = () => {
    setCount(count + 1)
}
const removeOne = () => {
    setCount(count - 1)
}
const double = () => {
    setCount(count * 2)
}

const divide = () => {
    setCount(count / 2)
}

const reset = () => {
    setCount(initialCount)
}

return {
    count,
    addOne,
    removeOne,
    double,
    divide,
    reset
}
}
