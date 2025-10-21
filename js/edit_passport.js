function edit_passport(){
    document.title='Изменяем кириллицу на латиницу по клику'
    const surname_node  = document.getElementById('surname')
    surname_node.innerText="Dobrotvorskii"
    const name_node  = document.getElementById('name')
    name_node.innerText="Nikolai"

}

const edit_passport_button = document.getElementById("edit_passport_button")
edit_passport_button.addEventListener("click",edit_passport)