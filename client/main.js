const fortuneBtn = document.getElementById('fortune-button')

const rickBtn = document.getElementById('rick-button')
const allCharBtn = document.getElementById('c-137-chars')

const form = document.querySelector('form')
// console.log(form);

// console.log(charInput);

let rickAudio = new Audio('/audio/pickle_rick.mp3')

// const baseUrl = 



document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

const yourFortune = (e) => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = (res.data)
            alert(data)
    })
}
fortuneBtn.addEventListener('click', yourFortune)



const favCharForm = (e) => {
    e.preventDefault()
    const charInput = document.getElementById('fav-char')
    let charName = charInput.value 
    // console.log(charName);
    charInput.value = ''
    alert('Character Submitted')
       
    
}
form.addEventListener('submit', favCharForm)




const clickMeBtn = (e) => {
    axios.get('https://rickandmortyapi.com/api/character/265')
    .then(res => {
        // console.log(res);
        const imageSrc = res.data.image
        const imgTag = document.createElement('img')
        imgTag.src = imageSrc
        document.body.append(imgTag) 
        // console.log(imgTag);
    })
}
rickBtn.addEventListener('click', () => {
    clickMeBtn()
    rickAudio.play()
})


const getAllChar = (e) => {
    axios.get('https://rickandmortyapi.com/api/location?name=c-137')
    .then(res => {
     const charsArr = res.data.results[0].residents
        // console.log(charsArr);
        charsArr.forEach(elem => {
            axios.get(elem)
            .then(res2 => {
            // console.log(res2);
            let characterList = document.createElement('li')
            let characters = document.createElement('ol')
        
            characterList.appendChild(characters)
            characters.textContent = res2.data.name
            document.body.append(characterList)
            document.body.appendChild(characters)
            })
        })

    })
}
allCharBtn.addEventListener('click', getAllChar)



