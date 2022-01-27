const express = require("express")
const app = express()

const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.static("Public"))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f118b92fb4780b",
            pass: "4543328055deb5"
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: "109dc5acb1-72b062@inbox.mailtrap.io",
        subject: req.body.subject,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send("error")
        } else {
            console.log("Email sent: " + info.response)
            res.send("success")
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})
