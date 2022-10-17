let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
 .then()
 .then(fruitDef => {
     textEntryDiv.innerHTML += fruitDef.text()
})
