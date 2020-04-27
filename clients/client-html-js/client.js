fetch("http://localhost:3000/albums")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("http://localhost:3000/members")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("http://localhost:3000/concertTours")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("http://localhost:3000/labels")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });