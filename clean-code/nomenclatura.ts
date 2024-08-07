
const users = ['Samuel', 'Lara']

const usersStartingWithLetterL = users.filter((user) => {return user.startsWith('L')}) 

function getUsers() {
    // Evite Nomes Genéricos (data, response, list, args, params)
    const users = getUsersFromDatabase()

    // validação
    // manipulação de dados (mapping)

    return users
}

function getUsersFromDatabase() {
    throw new Error("Function not implemented.")
}
