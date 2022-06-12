let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', searchFun = ()=>{
    let para = document.getElementById('text').innerHTML;
    let inputName = document.getElementById('inputName');
    let title = document.getElementById('title');
    let name = inputName.value.toLowerCase()

    if(name != ''){
        
        let result = para.toLowerCase().includes(name);
       
        if(result==true){
    title.innerHTML = name+' Found';
        }else{
            title.innerHTML = name+' Not Found'
        }

        // console.log(result);
    } else{
        title.innerHTML = "NO Input";
    }
inputName.value= '';

})









