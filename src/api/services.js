

export function getData(endpoint) {
    return fetch(endpoint)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function createData() {
    fetch()
}

export function updateData() {
    fetch()
}

export function deleteData() {
    fetch()
}