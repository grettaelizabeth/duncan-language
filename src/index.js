// textEntryDiv.innerHTML += `${fruitPhonetics}`

function fetchDict() {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
     .then((response) => {
      if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
     })
     .then((text) => return text)
     .catch((error) => return `Could not fetch dictionary: ${error}`);
}

let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
let fullText = fetchDict()
textEntryDiv.innerHTML += `<p> $fullText </p>`
