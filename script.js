const verifyRegisterCamp =  ()  =>  {   
    let campUser = document.getElementById("nickRegister")
    let campPass = document.getElementById("passRegister")
    let campVerifypass = document.getElementById("passVerify")
    let exit = document.getElementById("console")
    if(campUser.value.length < 4){
        exit.style.color = "red"
        exit.style.padding = "8px"
        exit.innerHTML = "Seu nome deve conter pelo menos 4 (quatro) caracteres!"
    }else{
        if(campPass.value.length < 4){
            exit.style.color = "red"
            exit.style.padding = "8px"
            exit.innerHTML = "Sua senha deve conter pelo menos 4 (quatro) caracteres!"
        }else{
            if(campVerifypass.value.length < 4){
                exit.style.color = "red"
                exit.style.padding = "8px"
                exit.innerHTML = "Sua confirmação de senha deve conter pelo menos 4 (quatro) caracteres!" 
            }else{
                if(campPass.value == campVerifypass.value){
                    localStorage.setItem("usuario",campUser.value)
                    localStorage.setItem("senhas",campPass.value)
                    exit.style.color = "white"
                    exit.style.padding = "8px"
                    exit.style.textAlign = "center"
                    exit.innerHTML = `Registro realizado, bem-vindo(a) ${campUser.value}`
                    campUser.value = ""
                    campPass.value = ""
                    campVerifypass.value = ""
                }else{
                    exit.style.color = "red"
                    exit.style.padding = "8px"
                    exit.innerHTML = "A senha digitada não é a mesma do campo de confirmação!"
                }
            }
        }
    }
}


const verifyLoginCamp = ()  =>  {   
    let animLoading = document.querySelector(".loading")
    let returnHtml = document.getElementById("console")
    let camp1 = document.getElementById("nickLogin")
    let camp2 = document.getElementById("passLogin")
    if(camp1.value.length < 4){
        returnHtml.innerHTML = "O nome precisa conter pelo menos 4 caracteres!"
        returnHtml.style.color = "red"
        returnHtml.style.padding = "8px"
    }else{
        if(camp2.value.length < 4){
            returnHtml.innerHTML = "A senha precisa conter pelo menos 4 caracteres!"
            returnHtml.style.color = "red"
            returnHtml.style.padding = "8px"
        }else{
            animLoading.style.display = "flex"
            setTimeout(()=>{
                animLoading.style.display = "none"
                let user = localStorage.getItem("usuario")
                let pass = localStorage.getItem("senhas")
                if(camp1.value == user){
                    if(camp2.value == pass){
                        returnHtml.innerHTML = `Bem-Vindo ${user}`
                        returnHtml.style.color = "white"
                        returnHtml.style.padding = "8px"
                        camp1.value = ''
                        camp2.value = ''
                    }else{
                        returnHtml.innerHTML = "Senha incorreta!"
                        returnHtml.style.color = "red"
                        returnHtml.style.padding = "8px"
                    }
                }else{
                    returnHtml.innerHTML = "Nenhum usuario encontrado!"
                    returnHtml.style.color = "red"
                    returnHtml.style.padding = "8px"
                }
            },2000)
        }
    }
}