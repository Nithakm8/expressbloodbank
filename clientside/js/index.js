let allDonors=[]
// let bgroup=[]
async function getDonors(){
const res=await fetch('http://localhost:3000/donor/')    
const {donors}=await res.json()
allDonors=donors
// bgroup=allDonors
let str=''
donors.forEach((donor1)=>{
    str+=`
     <tr>
        <td><input type="text" class="color bg-red-300" id="name-${donor1._id}" value="${donor1.name}"></td>
        <td><input type="number" class="color bg-red-300" value="${donor1.age}"></td>
        <td><input type="text" class="color bg-red-300" value="${donor1.place}"></td>
        <td><input type="Number" class="color bg-red-300" value="${donor1.phonenumber}"></td>
        <td><input type="text" class="color bg-red-300" value="${donor1.bloodgroup}"></td>
        <td>
        <a href="../pages/edit.html?id=${donor1._id} "><button class="edit bg-green-500 w-20 text-white gap-2 rounded-md p-1 h-7">Edit</button></a>
        <button onclick=deleteDonor('${donor1._id}') class="del bg-red-500 w-20 gap-2 text-white rounded-md p-1 h-7">Delete</button>
        </td>
       </tr> 
    `
})
document.getElementById('donors').innerHTML=str
}
getDonors()

async function deleteDonor(id){
    const res=await fetch(`http://localhost:3000/donor/deleteDonor/${id}`,{
        method:"DELETE"
    })
    const {msg}=await res.json()
  alert(msg)
    getDonors()
}

document.getElementById('search').addEventListener('keyup',(e)=>{
   let arr= allDonors.filter((donor)=>donor.name.toLowerCase().includes(e.target.value.toLowerCase())) 
   console.log(arr);
   
   let str1=''
    if(arr.length>0){
        arr.forEach((donor)=>{
            str1+=`
              <tr>
          <td> <input type="text" id="name-${donor._id}" value="${donor.name}" ></td>
          <td> <input type="text" id="age-${donor._id}" value="${donor.age}" ></td>
          <td> <input type="text" id="place-${donor._id}" value="${donor.place}" ></td>
          <td> <input type="text" id="ph-${donor._id}" value="${donor.phonenumber}"></td>
          <td> <input type="text" id="bg-${donor._id}" value="${donor.bloodgroup}"></td>
          
          <td>
             <a href="../pages/edit.html?id=${donor._id} "><button class="edit bg-green-500 w-20 text-white gap-2 rounded-md p-1 h-7">Edit</button></a>
        <button onclick=deleteDonor('${donor._id}') class="del bg-red-500 w-20 gap-2 text-white rounded-md p-1 h-7">Delete</button>
          </td>
        </tr>
            `
        })
          document.getElementById('donors').innerHTML=str1
    
    }
else{
  document.getElementById('donors').innerHTML='<h1>No donors found'
}
})




document.getElementById('select').addEventListener('change',(e)=>{
  const selectbg=e.target.value
  console.log(selectbg);
  
   let arr1=allDonors.filter(donor=>donor.bloodgroup==selectbg)
   let str2=''
    if(arr1.length>0){
        arr1.forEach((donor)=>{
            str2+=`
              <tr>
          <td> <input type="text" id="name-${donor._id}" value="${donor.name}" ></td>
          <td> <input type="text" id="age-${donor._id}" value="${donor.age}" ></td>
          <td> <input type="text" id="place-${donor._id}" value="${donor.place}" ></td>
          <td> <input type="text" id="ph-${donor._id}" value="${donor.phonenumber}"></td>
          <td> <input type="text" id="bg-${donor._id}" value="${donor.bloodgroup}"></td>
          
          <td>
            <a href="../pages/edit.html?id=${donor._id} "><button class="edit bg-green-500 w-20 text-white gap-2 rounded-md p-1 h-7">Edit</button></a>
        <button onclick=deleteDonor('${donor._id}') class="del bg-red-500 w-20 gap-2 text-white rounded-md p-1 h-7">Delete</button>
          </td>
        </tr>
            `
        })
          document.getElementById('donors').innerHTML=str2
    
    }
else{
  document.getElementById('donors').innerHTML='<h1>No donors found </h1>'
}

})
