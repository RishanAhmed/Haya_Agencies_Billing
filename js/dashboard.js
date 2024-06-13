function Disply(val){
    const disobj = document.getElementById("MAIN"+val+"-ICON")
    const Arrowv = document.getElementById("bi-arrow-down"+val)

    Switch_Scroll_Arrow(Arrowv, disobj)
    
    console.log(disobj.style)
}

function Switch_Scroll_Arrow(shareva, disob){

    const shareval = shareva
    let Direction = ""
    const disobj = disob

    if(disobj.classList.contains("dis")){
        Direction = "Down"
        shareval.classList.remove("bi-arrow-up")
        shareval.classList.add("bi-arrow-up-right")
    }
    else{
        Direction = "Up"
        shareval.classList.remove("bi-arrow-down")
        shareval.classList.add("bi-arrow-down-left")
    }

    setTimeout(second_Run, 50, shareval, Direction, disobj)

    console.log('DONE')

}

function second_Run(shareval, dir, dis){
    if(dir == "Down"){
        shareval.classList.remove("bi-arrow-up-right")
        shareval.classList.add("bi-arrow-right")
    }
    else{
        shareval.classList.remove("bi-arrow-down-left")
        shareval.classList.add("bi-arrow-left")
    }

    setTimeout(Theird_Run, 50, shareval, dir, dis)
}

function Theird_Run(shareval, dir, dis){
    if(dir == "Down"){
        shareval.classList.remove("bi-arrow-right")
        shareval.classList.add("bi-arrow-down-right")
    }
    else{
        shareval.classList.remove("bi-arrow-left")
        shareval.classList.add("bi-arrow-up-left")
    }

    setTimeout(Fourth_Run, 50, shareval, dir, dis)
}

function Fourth_Run(shareval, dir, dis){
    if(dir == "Down"){
        shareval.classList.remove("bi-arrow-down-right")
        shareval.classList.add("bi-arrow-down")
    }
    else{
        shareval.classList.remove("bi-arrow-up-left")
        shareval.classList.add("bi-arrow-up")
    }

    DisplyVal(dir, dis)
}


function DisplyVal(Direc, disobj){
    if(Direc == "Down"){
        disobj.classList.remove("dis")
    }
    else{
        disobj.classList.add("dis")
    }
}

setInterval(SetDate,1000)

SetUserName()

function SetDate(){
    let SystemDate = new Date

    let hours = SystemDate.getHours()
    let minutes = SystemDate.getMinutes()
    let Seconds = SystemDate.getSeconds()
    let Full_Time
    let After12hr = false 

    if (hours>13) {
        hours = hours - 12
        After12hr = true
    }
    else{
        After12hr= false
    }

    if (hours < 9) {
        hours = "0"+hours
    }

    if (minutes < 9) {
        minutes = "0"+minutes
    }

    if (After12hr = true) {
        Full_Time  = "Date And Time:   "+ hours + ":" + minutes +" PM"
    }
    else if(After12hr = false){
        Full_Time  = "Date And Time:   "+ hours + ":" + minutes +" AM"
    }


    let TextTime = document.getElementById("Time")
    
    TextTime.innerHTML = Full_Time
    
    //console.log(TextTime)
}

function SetUserName(){
   var Username = sessionStorage.getItem("EnUs");
   const Txtus = document.getElementById("DisUserName")

   Txtus.innerHTML = Username
}