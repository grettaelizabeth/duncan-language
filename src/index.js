// textEntryDiv.innerHTML += `${fruitPhonetics}`

function fetchDict(textEntryDiv) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
     .then((response) => {
      if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
     })
     .then((text) => {
        const commaSplit = text.split(',')
        const colonSplit = ${commaSplit[1]}.split(':')
        const phonetic = ${colonSplit[1]}
        phonetic = phonetic.substring(1, phonetic.length - 1)
        console.log(`phonetic: ${phonetic}`)
     })
     .catch((error) => { dictText = `Could not fetch dictionary: ${error}` });
}

let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
fetchDict()
