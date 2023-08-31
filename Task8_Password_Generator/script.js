class password{
    constructor(){
        console.log("Hello Guys Welcome to the password generator")
        this.password= ""
    }

    generatePass(length){
        let chars="abcdefghijklmnopqrstuvwxyz"
            let numbers="1234567890"
            let special="!@#$%^&*()_+/*-.;<>?"
        if(length<=4){
            alert("Your password is too short plz increase length")
        }
        else{
            let i=0
            while(i<length){
                this.password += chars[Math.floor(Math.random()*chars.length)]
                this.password += numbers[Math.floor(Math.random()*numbers.length)]
                this.password += special[Math.floor(Math.random()*special.length)]
                i+=3;
            }
            this.password = this.password.substr(0,length)
            return this.password
        }
    }
}
let p = new password();
let l = prompt("Enter the length of password")
let s = p.generatePass(l);

document.getElementById("pass").innerHTML= s;
