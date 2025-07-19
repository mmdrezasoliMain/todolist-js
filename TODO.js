let $ = document
let inputElem = $.querySelector('input') 
let addform = $.querySelector('.add')
let ulelem = $.querySelector('ul')
let itag = $.querySelector('i')


addform.addEventListener('submit',function(event){
    event.preventDefault()
})


function addnewtodo(NewTodoval){
    let newli = $.createElement('li')
    let icon = $.createElement('i')
    icon.className = 'fa fa-trash-o delete'
    newli.className = 'list-group-item d-flex justify-content-between align-items-center'
    let newspan = $.createElement('span')
    newli.append(newspan)
    newli.append(icon)
    newspan.innerHTML = NewTodoval
    ulelem.append(newli)
    icon.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })


}







inputElem.addEventListener('keydown', function(event){
    let NewTodoval = event.target.value.trim()
    if (event.key === 'Enter'){
        if (NewTodoval) {
           addnewtodo(NewTodoval)
           inputElem.value = ''
        }
    }
    
})


