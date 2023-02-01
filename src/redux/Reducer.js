import { ActionTypes } from "./Action";


const initialState = {
    cartadd: [],
    products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const addcart = (state = initialState, { type, payload }) => {
    let newOriginalList = [];
    let currentItem
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            newOriginalList = state.products.map((product) => {
                if (product.id === payload.id) {
                    currentItem = { ...product }
                }
                console.log(product)
                return product;
            })
            return {
                ...state,
                products:[...newOriginalList],
                cartadd: [...state.cartadd, currentItem]
            }
            default:
                return state;
    }

    
};