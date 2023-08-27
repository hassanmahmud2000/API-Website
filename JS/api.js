const loadPhone = async (searchText) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json ();
    const phones = data.data;
    displayData (phones);
}
function displayData (phones) {
    const cardContainer = document.getElementById ('card-container')
    
    // Clear Container !!!!!
    cardContainer.innerText = '';
    
    // jodi 12ter baysi hoy tahole daykha jabe !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const showAllButton = document.getElementById ('showAll')
    if (phones.length > 12) {
        showAllButton.classList.remove ('hidden')
    }
    else (
        showAllButton.classList.add ('hidden')
    )

    // Just 12 ta daykhaiba  !!!!!!!!
    phones = phones.slice(0,12);

    phones.forEach(Phone => {
        console.log (Phone);

        const phoneCard = document.createElement ('div');
        // Inner HTML Create !!!!!!!
        phoneCard.classList=`card bg-gray-100 shadow-xl`
        phoneCard.innerHTML=`<div class="card bg-gray-100 p-3 shadow-xl">
        <figure><img src="${Phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title font-bold text-3xl"> ${Phone.phone_name}</h2>
          <p class="text-xl "> ${Phone.brand}</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails(' ${Phone.slug}')" id="showDetails" class="btn btn-primary">SHOW DETAILS</button>
          </div>
        </div>
    </div>`
    // Appaind ALL Data !!!!!!
    cardContainer.appendChild (phoneCard)
    });

    spinnerToggol (false);

}

// showDetails BUtton !!!!!!!!!!!!!!!!!!!!!!
const showDetails = (id) => {
    const details = document.getElementById ('showDetails');
    console.log (id)
}

// Search Products !!!!!!!!!!!
const searchField=() => {
    spinnerToggol (true);
    const textField = document.getElementById ('search-area');
    const searchText = textField.value;
    console.log (searchText);
    loadPhone (searchText);
}

const spinnerToggol = (isLoding) =>  {
    const spinner = document.getElementById ('spinner');
    if(isLoding) {
        spinner.classList.remove ('hiddin')
    }
    else {
        spinner.classList.add ('hidden')
    }
}
