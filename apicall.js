const loadQuotes =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayShow(data))
};

const displayShow =(data)=>{
    const show = document.getElementById('quote');
   show.innerText = data.quote;
   show.style.fontWeight ="bold";
   show.style.backgroundColor ='green';
   show.style.color ='white';
   show.style.padding ='10px'
   show.style.textTransform ='uppercase'
}