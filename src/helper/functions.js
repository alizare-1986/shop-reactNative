const shorten = (title) => title.split(" ").slice(0, 2).join("");
const isInCart = (state,id)=>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}
const quantityCount = (state,id)=>{
    const index = state.selectedItems.findIndex(items=>items.id===id)
    if(index===-1){
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}
export { shorten,isInCart,quantityCount };
