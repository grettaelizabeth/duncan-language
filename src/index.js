let textEntryDiv = document.getElementById('text-entry')
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
.then(dict => {
  textEntryDiv.innerHTML += '<p> ${dict} </p>'
})
