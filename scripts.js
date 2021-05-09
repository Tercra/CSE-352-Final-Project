window.onload = function(){
    var files;
    var fs = document.getElementById('fs');
    fs.addEventListener('change', (e) => {
        files = e.target.files;
        console.log(files)
    })
}