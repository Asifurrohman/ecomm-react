import { createContext, useState, useContext } from "react";

const CartContext = createContext(null)

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(productId){
        const existingItem = cartItems.find(item => item.id === productId)

        if(existingItem){
            const currentQuantity = existingItem.quantity
            const updatedCardItems = cartItems.map((item) => 
                item.id === productId 
                    ? {id: productId, quantity: currentQuantity+1} 
                    : item
                )

            setCartItems(updatedCardItems)
        } else {
            setCartItems([...cartItems, { id: productId, quantity:1 }])
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    return context
}