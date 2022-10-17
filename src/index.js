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
        console.log('AAA')
        const commaSplit = text.split(',')
        console.log('BBB')
        const colonSplit = commaSplit[1].split(':')
        console.log('CCC')
        const phonetic = colonSplit[1]
        console.log('DDD')
        const trimmedPhonetic = phonetic.substring(1, phonetic.length - 1)
        console.log('EEE')
        console.log(`phonetic: ${trimmedPhonetic}`)
     })
     .catch((error) => { dictText = `Could not fetch dictionary: ${error}` });
}

let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
fetchDict()
