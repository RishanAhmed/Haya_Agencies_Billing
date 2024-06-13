function Login(){
    var Username = "Admin"
    let Password = "Haya@123"
    var Upper_Username = Username.toLocaleUpperCase()
    var Upper_Password = Password.toLocaleUpperCase()


    let Entered_Username = document.getElementById("Username").value
    let Entered_Password = document.getElementById("Password").value
    var Entered_Upper_Username = Entered_Username.toLocaleUpperCase()
    var Entered_Upper_Password = Entered_Password.toLocaleUpperCase()

    if(Entered_Upper_Username == Upper_Username && Entered_Upper_Password == Upper_Password){
        
        window.location.assign("dashboard.html")
    }

    sessionStorage.setItem("EnUs", Entered_Upper_Username)
}