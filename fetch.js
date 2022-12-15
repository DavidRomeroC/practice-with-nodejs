import fetch from 'node-fetch';
// const getData = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> console.log(data))
        .catch(err => console.log(err))
    // const data = await resp.json()
    // console.log(data)
// }

// getData()