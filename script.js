let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");
let card7 = document.querySelector(".card7");

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsprogrammers.free.beeceptor.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data); 
      })
      .catch((error) => {
        reject(error); 
      });
  });
}

// Usage
fetchData()
  .then((data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      console.log("API response:", data[index].title, data[index].completed);
    }


    card1.innerText =` ${data[0].title} ${data[0].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card2.innerText =` ${data[1].title} ${data[1].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card3.innerText =` ${data[2].title} ${data[2].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card4.innerText =` ${data[3].title} ${data[3].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card5.innerText =` ${data[4].title} ${data[4].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card6.innerText =` ${data[5].title} ${data[5].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`
    card7.innerText =` ${data[6].title} ${data[6].completed?"\nStatus = Completed":"\nStatus = Incomplete"}`

  })
  .catch((error) => {
    console.error("API request failed:", error);
  });
