import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deccItemQuantity, incItemQuantity } from './cartSlice';

const UpdtaeItemQuantity = ({ pizzaId, currentQuantity }) => {

    const dispatch = useDispatch();

    return (
        <div className='flex items-center gap-1 md:gap-3'>
            <Button
                type='round'
                onClick={() => dispatch(deccItemQuantity(pizzaId))}>-</Button>
            <span className='text-sm font-medium'>{currentQuantity}</span>
            <Button
                type='round'
                onClick={() => dispatch(incItemQuantity(pizzaId))}
            >+</Button>
        </div>
    )
}

export default UpdtaeItemQuantity