//Implement following methods of string
//includes
function includes(str, any){
    for(let i = 0; i < str.length; i++){
        if (str[i] === any){
            return true
        }
    }
    return false
}

//charAt
function charAt(char, index){
        if(index >= 0 && index < str.length){
            return char[index]
        }

    }


//endsWith
function endsWith(str, index){
    if(str.length > 0 && str[str.length - 1] === index){
        return true
    }
    return false
}

//startsWith
function startsWith(str, char){
    if (str.length > 0 && str[0] === char){
        return true
    }
    return false
}

//slice
function slice(str, el1, el2){
    let result = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] === el1) {
            result += el2
        } else {
            result += str[i]
        }
    }
    return result
}

//indexOf
function indexOf(str,element){
    let result = ''
    for (i = 0; i < str.length; i++){
        if(str[i] === element){
            result += i
            if (i !== str.length - 1) {
                result += ''
            }
        }          
    }
    return result
}



//replace
function replace(string,el1,el2){
    let str = ''
    for(let i = 0; i < string.length;i++){
        if(string[i] === el1){
            str += el2
        }
        else{
            str += string[i]
        }
    }
    return str
}

//replaceAll
function replaceAll(string,el1, el2){
    let result = ''
    for(let i = 0; i < string.length;i++){
        if (string[i] === el1){
            result += el2
        }
        else{
            result += string[i]
        }
    }
    return result
}