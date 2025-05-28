export const isTypeOfProduct = (obj: any): boolean => {
    return (
        typeof obj === 'object' &&
            obj !== null &&
            typeof obj.title === 'string' &&
            typeof obj.price === 'number'
    )
}