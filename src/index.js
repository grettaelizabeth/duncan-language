let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
// .then(dict => {textEntryDiv.innerHTML += '<p> ${dict} </p>'},)
   .then(textEntryDiv.innerHTML += '<p> success! </p>',
         textEntryDiv.innerHTML += '<p> failure! </p>')
