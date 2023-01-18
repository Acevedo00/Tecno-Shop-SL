const fetchSimulation = (database, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(database);
            rejact(new Error("algo salio mal"))
        }, time)
    })
} 

export default fetchSimulation;