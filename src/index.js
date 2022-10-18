function fetchDict(english, outputDiv) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${english}`)
     .then((response) => {
      if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
     })
     .then((text) => {
        const commaSplit = text.split(',')
        const colonSplit = commaSplit[1].split(':')
        const phonetic = colonSplit[1]
        const trimmedPhonetic = phonetic.substring(2, phonetic.length - 2)
        console.log(`phonetic: ${trimmedPhonetic}`)
        outputDiv.innerHTML += `<p> Phonetic: ${trimmedPhonetic} </p>`
     })
     .catch((error) => { dictText = `Could not fetch dictionary: ${error}` });
}

function translate() {
    let english = document.getElementById('english')
    let outputDiv = document.getElementById('output')
    fetchDict(english, outputDiv)
}
