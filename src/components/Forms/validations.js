
export const isNull = (x) => {
    return !Boolean(x)
}

export const notLength = (x, minus, max) => {
    return (x.length < minus || x.length > max)
}

export const notPassword = (password) => {
    let re_pass = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&amp;*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    return (!re_pass.test(password) ||
        notLength(password, 8, 30) ||
        isNull(password))
}

export const notPasswordLogin = (password) => {
    return (notLength(password, 8, 30) || isNull(password))
}

export const checkNumber = (x, minus, max) => {
    let re_number = new RegExp(/^[0-9]*$/);
    return (!re_number.test(x) || notLength(x, minus, max))
}

export const notEmail = (email) => {
    let re_email = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return (!re_email.test(email) || notLength(email, 5, 100) || isNull(email))
}

export const nullInObj = (obj) => {
    let nulls = []
    for (var prop in obj) {
        if (isNull(obj[prop])) nulls.push(prop)
    }
    return nulls
}


