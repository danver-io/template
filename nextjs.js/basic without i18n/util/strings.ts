export const equalString = (str1?: string, str2?: string): boolean => {
    if (!str1 || !str2) return false

    return str1?.toLowerCase() === str2?.toLowerCase()
}

export const isEmpty = (text?: string): boolean => {
    if (!text) return true
    else if (text?.length === 0) return true
    else return false
}

export const isNotEmpty = (text?: string): boolean => {
    return !isEmpty(text)
}
