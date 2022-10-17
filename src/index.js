// textEntryDiv.innerHTML += `${fruitPhonetics}`

function fetchDict() {
    let dictText = 'still empty';
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fruit')
     .then((response) => {
      if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
      }
      console.log('A')
      return response.text();
     })
     .then((text) => { console.log('B'); dictText = text })
     .catch((error) => { console.log('C'); dictText = `Could not fetch dictionary: ${error}` });
    return dictText
}

let textEntryDiv = document.getElementById('text-entry')
textEntryDiv.innerHTML += '<p> frog and toad </p>'
let fullText = fetchDict()
textEntryDiv.innerHTML += `<p> ${fullText} </p>`
