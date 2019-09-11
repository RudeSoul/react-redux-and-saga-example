export const fetchData = (data) => {
    return fetch(`https://reqres.in/api/users/${data}`)
            .then(response => response.json())
}