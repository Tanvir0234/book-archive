//-------------------Onclick Button------------------------------
const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value ;
    
    //-------------------clear input field------------------
    searchField.value = '';

    //---------------------Api url------------------------------------
    const url =  `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));

    


}




const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book =>{
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');

       div.innerHTML =`
       <div class="card h-100">
               <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body">
               <h5 class="card-title">${book.title}</h5>
               <p class="card-text"><span class="fw-bold">Author Name :</span> ${book.author_name}</p>
               <p class="card-text"><span class="fw-bold">First Publish Date :</span> ${book.publish_date}</p>
      </div>
      <div class="card-footer">
              <button type="button" onclick ="viewFullDetails('${book.key}')" class="btn btn-primary">View Full Image</button>
      </div>
    </div>
       
       `

        searchResult.appendChild(div);
    })

}
/*
const viewFullDetails = key => {

const url = `https://openlibrary.org/search.json?q=${key}`
 
 fetch(url)
.then(res => res.json())
.then(data => displayDetail(data.key));


const displayDetail = details => {
 const showDetail = document.getElementById('show-detail');
details.forEach(detail=>{
    const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
                <img src="https://covers.openlibrary.org/b/id/${details.cover_i}-L.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${details.subject}</p>
                  <p class="card-text">${details.subject_facet}</p>
                </div>
              </div>
  
  
  ` 
  showDetail.appendChild(div)
})
 
 
}



}

*/


