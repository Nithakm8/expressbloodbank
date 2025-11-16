document.getElementById('addform').addEventListener('submit',async(e)=>{
    e.preventDefault()
    console.log('form submitted');
    
    let donor={
        name:document.getElementById('name').value,
        age:Number(document.getElementById('age').value),
        place:document.getElementById('place').value,
        phonenumber:Number(document.getElementById('ph').value),
        bloodgroup:document.getElementById('bg').value
    }
    try{
        console.log(donor);
        
        const res=await fetch('http://localhost:3000/donor/add',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(donor)
        })
        const data=await res.json()
        console.log(data);
        
    }
    catch(error){
       console.log(error);
       
        
    }

 window.location.href='../'
})


