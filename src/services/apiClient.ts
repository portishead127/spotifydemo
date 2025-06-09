import axios from 'axios';
const apiClient = axios.create({
baseURL: "https://api.spotify.com",
headers: {
"Content-Type" : "application/x-www-form-urlencoded",
"Authorization" : 'Bearer BQCo8DjbdorVgJGg-fp4eFMzb7XWDmR6YeHqDATS1swsoTBrQH1GqjwZ69foV44LuIFRtjIm6NftTNs5nGBofjM_Zy1WdbpsRzBk_aLJePXOf9I7rCNiee68iRtQiX9H5e0u5eX0moU'
},
timeout: 10000,
});
export default apiClient