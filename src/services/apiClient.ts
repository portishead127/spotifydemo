import axios from 'axios';
const apiClient = axios.create({
baseURL: "https://api.spotify.com",
headers: {
"Content-Type" : "application/x-www-form-urlencoded",
"Authorization" : 'Bearer BQDA5Fe4dGtURM6AVmmfPskox6r6Lak197Ffz1YmdnTcMe_pPkM8mM40njzlykWjc-JzE8m6Od-tTzuJLNCseU9p8Q2OLDq_jcsTIQT9_mPaJ7WLYtg'
},
timeout: 10000,
});
export default apiClient