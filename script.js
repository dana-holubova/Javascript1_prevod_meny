const convertToCZK = (sum, currency) => {
    if (currency === 'EUR') {
        return sum * 24.47
    }
    else if (currency === 'GBP') {
        return sum * 28.09
    }
    else if (currency === 'USD') {
        return sum * 24.81
    }
    else if (currency === 'BTC') {
        return sum * 478637
    }

    return null
}

document.body.innerHTML += convertToCZK(25, 'EUR')