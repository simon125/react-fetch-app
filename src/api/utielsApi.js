 const fetchLogger = (response) => {

    console.log(`fetchLogger ${response.url} status`, response.status)

    return response.json().then((jsonData) => {
        console.log(`fetchLogger ${response.url} data`, jsonData)

        if(jsonData.status == 500)alert('serwer error')
        else if(jsonData.status == 400)alert('problem with site')
        return jsonData
    })
}
 export default fetchLogger


