let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
let fruitDef = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
textEntryDiv.innerHTML += fruitDef
