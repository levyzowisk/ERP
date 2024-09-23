

document.getElementById('meuform').addEventListener('submit',function(event) {
    event.preventDefault();
    fetch('http://localhost:3000/')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        
    }
    )
})