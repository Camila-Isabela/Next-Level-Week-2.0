
//        procurar...      esse id                  se clicar...faz isso
document.querySelector("#add-time").addEventListener('click', cloneField)


function cloneField() {

    //    procure                                        esse cara         e duplique!
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    //Pegar os campos para limpar. Que campos?     Esses aqui!
    const fields = newFieldContainer.querySelectorAll('input');
    
    //Limpando...
    fields.forEach((clean)=> {
        clean.value = ""
    })
    
    //Onde colocar?             aqui!
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

