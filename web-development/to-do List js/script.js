const list = document.getElementById('list')

const submitValue = (e) => {
    e.preventDefault()
    const inputValue = e.target[0].value
    condition(inputValue)
    e.target[0].reset()
}

const listItem = (inputValue) => {
    const item = document.createElement('div')
    item.innerHTML =
        `<input type="checkbox">
        <span id="valueText">${inputValue}</span>
        <button onclick="deleteItem(event)">X</button>`
    return item
}

const deleteItem = (e) => {
    const deleteList = e.target.parentElement;
    list.removeChild(deleteList)
}


const condition = (inputValue) => {
    if (inputValue === '') {
        alert('tolong masukan input anda')
    } else {
        list.appendChild(listItem(inputValue))
    }
}
