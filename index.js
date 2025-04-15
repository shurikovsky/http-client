const http = require("http");

const MyApiKey = process.env.MyApiKey;
const url = "http://api.weatherstack.com/current" +
`?access_key=${MyApiKey}&`+
"query=London"

http.get(url, (res) => {
    if (res.statusCode !== 200) {
        console.log('Status code ', res.statusCode);
        return;
    }
    res.setEncoding('utf8');
    let data = '';
    res.on("data", (chunk) => data += chunk);
    res.on("end", () => {

        console.log(JSON.parse(data))
    })
}).on("error", (err) => {
    console.error(err);
})