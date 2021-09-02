const searchResult = document.getElementById('search-result');
const errorDiv = document.getElementById('error');
const loader =document.getElementById("loader");
let storeBooks = [];
const searchResultQuantity = document.getElementById('result-quantity')

//-------------------Onclick Button------------------------------
const searchBook = () => {
  loader.style.display = 'block'
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value ;

    //---error handling----
    if(searchText === ''){
      errorDiv.innerText = 'Search Field Empty Please Enter the Book Name';
      searchResultQuantity.innerHTML = ``;
      searchResult.textContent = '';
      loader.style.display = 'none'

      return;
    }
  
    
    //-------------------clear input field------------------
    searchField.value = '';

   

    //---------------------Api url------------------------------------
    const url =  `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{ displaySearchResult(data.docs)


   //------------error handle-------------------
      if(data.numFound===0){
      errorDiv.innerText = 'No result found'
      searchResultQuantity.innerHTML = ``;
      loader.style.display = 'none'


      }
      else{
        errorDiv.innerText = '';
      }
    });
}

//---------------------------Result Arrow Function----------------------------
const displaySearchResult = books => {
  loader.style.display = 'none'

    //------------clear dom----------
    searchResult.innerHTML ="";
    const allBooks = books.slice(0, 30);
    // clearing array
    storeBooks.length = ''; 
    allBooks.forEach(book =>{

       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML =`
       <div class="card h-100">
               <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body">
               <h5 class="card-title"><span class="fw-bold">Book Name :</span>${book.title ? book.title : 'Unknown title'}</h5>
               <p class="card-text"><span class="fw-bold">Author Name :</span> ${book.author_name}</p>
               <p class="card-text"><span class="fw-bold">First Publish Date :</span> ${book.first_publish_year}</p>
      </div>
     </div>
       
       `
      searchResult.appendChild(div);
    })

    books.forEach(book => {
      storeBooks.push(book)
  })
  
  searchResultQuantity.innerHTML = `Results Found : ${storeBooks.length}`;
  
}








