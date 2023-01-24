// fetch("products.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const productDiv = document.getElementById("all-product");

fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      productDiv.innerHTML += `<div class="col-lg-4">
      <div class="single-product">
        <img src="${data[i].image}" alt="Image" />
        <h5>$${data[i].price}</h5>
        <h3>${data[i].name}</h3>
        <p>
          ${data[i].text}
        </p>
      </div>
    </div>`;
    }
  });
