const validateEmptyLength3 = (value) => {
    if (!value) {
        return '*Este campo é obrigatório'
    }

    if (value.length < 3) {
        return '*Este campo precisa de no mínimo 3 caracteres'
    }

    return true
}

const validateEmptyAndEmail = (value) => {
    if (!value) {
        return '*Este campo é obrigatório'
    }

    if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)) {
        return '*Este campo precisa ser um e-mail válido'
    }

    return true
}

export { validateEmptyLength3, validateEmptyAndEmail }
