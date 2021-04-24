const baseURL = "https://ghibliapi.herokuapp.com"


const getAllFilms = async () => {
  let res = await fetch(baseURL + "/films");

  let json = await res.json();

  displayAllFilms(json);
}

const getYearFilms = async () => {
    let res = await fetch(baseURL + "/films");
  
    let json = await res.json();

    let yearArr = json.filter(film => film.release_date < 2000)

    yearArr.sort();

    // console.log(yearArr);
    
    displayYearFilms(yearArr);
  }

const getYearFilms2 = async () => {
    let res = await fetch(baseURL + "/films");
  
    let json = await res.json();

    let yearArr2 = json.filter(film => film.release_date >= 2000)

    yearArr2.sort();

    // console.log(yearArr2);
    
    displayYearFilms2(yearArr2);
  }

const getRatedFilms = async () => {
    let res = await fetch(baseURL + "/films");
  
    let json = await res.json();

    let ratingArr = json.filter(film => film.rt_score >= 90)

    ratingArr.sort((cur, prev) => prev.rt_score - cur.rt_score);

    // console.log(ratingArr);
  
    displayRatedFilms(ratingArr);
  }



getAllFilms();
getRatedFilms();
getYearFilms();
getYearFilms2();



const displayAllFilms = (films) => {
    
    const card_group = document.getElementById("all-tab")
    
    films.map((film) => {
        let card = document.createElement("div")
        let card_body = document.createElement("div")
        let card_title = document.createElement("h5")
        let card_text = document.createElement("p")
        let card_text_muted = document.createElement("p")

        card.className = "card, col"
        card_body.className = "card-body"
        card_title.className = "card-title"
        card_text.className = "card-text"
        card_text_muted.className = "card-text-muted"

        card_title.innerText = film.title
        card_text.innerText = film.description
        card_text_muted.innerText = film.original_title

       
        card_group.appendChild(card)

        card.appendChild(card_body)
        card.appendChild(card_title)
        card.appendChild(card_text)
        card.appendChild(card_text_muted)
    })   
}

const displayYearFilms = (films) => {
    
    const card_group = document.getElementById("year-tab")
    
    films.map((film) => {
        let card = document.createElement("div")
        let card_body = document.createElement("div")
        let card_title = document.createElement("h5")
        let card_text = document.createElement("p")
        let card_text_muted = document.createElement("p")

        card.className = "card, col"
        card_body.className = "card-body"
        card_title.className = "card-title"
        card_text.className = "card-text"
        card_text_muted.className = "card-text-muted"

        card_title.innerText = film.title
        card_text.innerText = film.description
        card_text_muted.innerText = `Release Date: ${film.release_date}`

       
        card_group.appendChild(card)

        card.appendChild(card_body)
        card.appendChild(card_title)
        card.appendChild(card_text)
        card.appendChild(card_text_muted)
    })
}

const displayYearFilms2 = (films) => {
    
    const card_group = document.getElementById("other-tab")
    
    films.map((film) => {
        let card = document.createElement("div")
        let card_body = document.createElement("div")
        let card_title = document.createElement("h5")
        let card_text = document.createElement("p")
        let card_text_muted = document.createElement("p")

        card.className = "card, col"
        card_body.className = "card-body"
        card_title.className = "card-title"
        card_text.className = "card-text"
        card_text_muted.className = "card-text-muted"

        card_title.innerText = film.title
        card_text.innerText = film.description
        card_text_muted.innerText = `Release Date: ${film.release_date}`

       
        card_group.appendChild(card)

        card.appendChild(card_body)
        card.appendChild(card_title)
        card.appendChild(card_text)
        card.appendChild(card_text_muted)
    })
}

const displayRatedFilms = (films) => {
    
    const card_group = document.getElementById("rating-tab")
    
    films.map((film) => {
        let card = document.createElement("div")
        let card_body = document.createElement("div")
        let card_title = document.createElement("h5")
        let card_text = document.createElement("p")
        let card_text_muted = document.createElement("p")

        card.className = "card, col"
        card_body.className = "card-body"
        card_title.className = "card-title"
        card_text.className = "card-text"
        card_text_muted.className = "card-text-muted"

        card_title.innerText = film.title
        card_text.innerText = film.description
        card_text_muted.innerText = `Rating: ${film.rt_score}`

       
        card_group.appendChild(card)

        card.appendChild(card_body)
        card.appendChild(card_title)
        card.appendChild(card_text)
        card.appendChild(card_text_muted)
    })
}

