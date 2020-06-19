export const required = errorText => value => {
    if(value) return undefined
    return `${errorText}`
}

export const requiredMail = value => {
    if(value && /^[+]375[(][0-9]{2}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/.test(value.info)) return undefined
    else if (value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return undefined
    return 'Wrong phone number or email'
}

export const lengthCreator = (maxLength, minLength) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    else if(value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}

