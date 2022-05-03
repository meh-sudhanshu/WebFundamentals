

var submit = document.getElementsByClassName('submit')[0]

var task_container = document.getElementsByClassName('task-container')[0]

var insert = document.getElementsByClassName('insert')[0]


const test = document.getElementsByClassName('test')[0]

function fetchData(){
    data = insert.value
    console.log(data)
    return data
}

function doJob(){
    var h2 = document.createElement('h2')
    data = fetchData()
    h2.innerHTML=data
    task_container.appendChild(h2)
    insert.value=''
    console.log(h2)
    // document.location.reload()
}

submit.addEventListener('click',doJob)

