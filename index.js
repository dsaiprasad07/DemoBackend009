const express = require('express')
const app = express()
require('dotenv').config()
const port = 4000



const jsonData = {
    "purchaseOrderId": "PO12345",
    "date": "2025-05-24",
    "supplier": {
        "id": "SUP001",
        "name": "ABC Supplies",
        "location": "New York",
        "contactPerson": "John Doe",
        "phone": "123-456-7890"
    },
    "items": [
        {
            "itemId": "ITM001",
            "itemName": "Printer Paper",
            "category": "Stationery",
            "subcategory": "Paper Products",
            "quantity": 10,
            "rate": 5.0,
            "discount": 0.5,
            "taxPercent": 10,
            "total": 49.5
        },
        {
            "itemId": "ITM002",
            "itemName": "Pen",
            "category": "Stationery",
            "subcategory": "Writing Instruments",
            "quantity": 20,
            "rate": 1.5,
            "discount": 0,
            "taxPercent": 5,
            "total": 31.5
        }
    ],
    "billing": {
        "subtotal": 75.0,
        "totalDiscount": 5.0,
        "taxAmount": 6.0,
        "grandTotal": 76.0
    },
    "remarks": "Urgent delivery required"
}






app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("success fully login in twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>login to the web page:-</h1>")
})


app.get("/gitHub", (req,res) => {
    res.json(jsonData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
