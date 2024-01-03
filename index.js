let btn=document.querySelector('#next-quote')
let Quote=document.querySelector('#quote')
let author=document.querySelector('h3')



btn.addEventListener('click',getQuotes)
    // let random=Math.floor(Math.random()*quotes.length)


    function getQuotes() {
        fetch('http://localhost:3000/quotes')
            .then(response => response.json())
            .then(quotes => {
                let random = Math.floor(Math.random() * quotes.length);
                Quote.innerText = quotes[random].quote;
                author.innerText = quotes[random].author;
            })
            .catch(error => console.error('Error fetching quotes:', error));
    }
    
let form=document.querySelector("#form")

form.addEventListener('submit', (e)=>{
    e.preventDefault()
 let quoteValue=form.querySelector('#quote')
 let authorValue=form.querySelector('#author')

 const updateQuote={
    quote:quoteValue.value,
    author:authorValue.value
 }
 updateQuotes(updateQuote)
})

function updateQuotes(updateQuote){
    fetch('http://localhost:3000/quotes',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateQuote)
    }).then(res=>res.json())
    .then(quote=>quote)
}