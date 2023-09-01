const express = require("express");
const app = express()
const cors = require("cors");
const { default: axios } = require("axios");


app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate", async(req, res)=>{
    const {username} = req.body || {}
    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            {username:username, secret:username, first_name:username},
            {headers: {"private-key":"6776936a-4abf-4370-9b5b-f380e6712068"}}
            );
        return res.status(response.status).json(response.data)
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data)
        } else {
            res.status(500).json({message:"Internal server error"})
        }
        
    }
});

// "https://api.chatengine.io/users/"
// "6776936a-4abf-4370-9b5b-f380e6712068"

app.listen(3001);
