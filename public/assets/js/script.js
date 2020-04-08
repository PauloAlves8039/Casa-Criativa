/**
 * Arquivo responsável pelas configurações no frontend. 
 * 
*/

/**
 * Função responsável pelas configurações de exibição do modal.
 * 
*/
function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")    
}

/**
 * Função responsável pela validação dos dados de entrada. 
 * 
 * @param {*} event parâmetro passado para validação dos campos do modal. 
 */
function checkFields(event) {
    
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value) {
        
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os campos!!!")
    }
}
