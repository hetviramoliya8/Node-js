const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user :"hetviramoliya8@gmail.com",
        pass : "vgoevqkxmayumuca"
    }
})


module.exports.sendOtp = (email,otp)=>{
    let mailoptions = {
        to : email,
        from : "hetviramoliya8@gmail.com",
        subject : "Password Reset OTP",
        text : `Your password reset otp is ${otp}`
    }

    transport.sendMail(mailoptions)
}