const urlParams=new URLSearchParams(window.location.href.split('?')[1])
const id=urlParams.get('id')
async function getDonor(){
    const res=await fetch(`http://localhost:3000/donor/getDonor/${id}`)
    const {donor}=await res.json()
    console.log(donor);
    
    document.getElementById('name').value=donor.name
    document.getElementById('age').value=donor.age
    document.getElementById('place').value=donor.place
    document.getElementById('ph').value=donor.phonenumber
     document.getElementById('bg').value=donor.bloodgroup
    }

    getDonor()

    document.getElementById('editform').addEventListener('submit',async(e)=>{
        e.preventDefault()
        const donor={
        name:document.getElementById('name').value,
        age:Number(document.getElementById('age').value),
        place:document.getElementById('place').value,
        phonenumber:Number(document.getElementById('ph').value),
        bloodgroup:document.getElementById('bg').value
        }
        const res=await fetch(`http://localhost:3000/donor/editdonor/${id}`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(donor)
        })
        const result=await res.json()
        alert(result.msg)
        window.location.href='../'

    })
    