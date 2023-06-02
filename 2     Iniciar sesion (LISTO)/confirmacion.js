const defaultfile = 'avatar(2).png';

const file = document.getElementById('foto');
const img = document.getElementById('img');
file.addEventListener('change', e =>{
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            img.src = e.target.result;
            img.style.width="310px";
            img.style.height="310px"
        }
       reader.readAsDataURL(e.target.files[0]);
    }else{
        img.src = defaultfile;
    }
});