import fetchLogger from './utielsApi'

const taskResourcePath ='https://tasks.isa.valuepoint.pl/users'
const myId = '5af01d3e6f78ba537f03af5c'

   export const getAllUsers = () => {
    return    fetch(`${taskResourcePath}`)
            .then(fetchLogger)
            // .then(users => console.log("all users ", users))
    }

 export   const getMyUser = (id) => {
        //w poniższy sposób można zaisać adres do stringa nazywa się to string templates
        // i wówczas zamiast http w fetchu można wpisać zmienną
        //
        const url = `${taskResourcePath}/${id}`
        // const _url = `http://tasks.isa.valuepoint.pl/users/${id}`
        return  fetch(url)
            .then(fetchLogger)
            // .then(myId => console.log("my id ", myId))
    }

