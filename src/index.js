// textEntryDiv.innerHTML += `${fruitPhonetics}`

function fetchDict(textEntryDiv) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
     .then((response) => {
      if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
      }
      console.log('A')
      return response.text();
     })
     .then((text) => {
        console.log(`BBB`)
        const myArray = text.split(',')
        console.log(`CCC ${myArray[1]}`)
     })
     .catch((error) => { console.log('D'); dictText = `Could not fetch dictionary: ${error}` });
}

let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
fetchDict()
