

let container=document.getElementById('container');

let apiKey=`16fdafb2`




let getData =async()=>{


    let find=document.getElementById('searching').value;
    let url=`https://www.omdbapi.com/?apikey=${apiKey}&s=${find}`
    try {
        let res= await fetch(url);
        let data= await res.json()
        displayData(data.Search)
        console.log(data.data)
    } catch (error) {
        console.log(error)
    }
}


let displayData=(data)=>{
    container.innerHTML="";
    if(data !== undefined){

        data.map((item)=>{
        
            let masterCard=document.createElement('div')
            masterCard.className='master-card';

            let poster=document.createElement('img');
            poster.src=item.Poster;

            let title=document.createElement('p')
            title.textContent="TiTle -"+item.Title;

            let year=document.createElement('p');
            year.textContent="Year -"+item.Year;

            masterCard.append(poster,title,year)
            container.appendChild(masterCard)

            // window.location.href=`./movie.html`
        })
    }
    else{
        let notDivFound=document.createElement('div');
        notDivFound.textContent="Movie Result not found";

        container.appendChild(notDivFound);
    }
}