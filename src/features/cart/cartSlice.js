import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [
        // {
        //    pizzaId: 12,
        //    name: 'Mediterranean',
        //    quantity: 2,
        //    unitPrice: 16,
        //    totalPrice: 32
        // }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addItem(state, action) {
            state.cart.push(action.payload);
        },

        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },

        incItemQuantity(state, action) {


            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },

        deccItemQuantity(state, action) {

            const item = state.cart.find(item => item.pizzaId === action.payload);


            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action);
        },

        clearCart(state, action) {
            state.cart = [];
        }

    }

});


export const { addItem, deleteItem, incItemQuantity, deccItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


export const getCart = store => store.cart.cart;


export const getTotalCartQuantity = store => store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = store => store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);


export const getCurruntQuantityById = id => state => {
    return state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
}
