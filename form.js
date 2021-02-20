const url = "https://frozen-headland-80249.herokuapp.com/customer/infor";
const posturl = "https://frozen-headland-80249.herokuapp.com/api/transactions";
var dummyData;
var x = location.search;
document.addEventListener('DOMContentLoaded',async ()=>{
    
    //console.log(x.charAt(4))
    dummyData = await getUser()
    //console.log(getUserById(1))
    var cust = document.getElementById("customer");
    var from  = document.getElementById("from");
    var amt  = document.getElementById("amt");
    var submit = document.getElementById("submit")
    const user = getUserById(x.charAt(4));
    from.value = user[0]["firstName"].concat(" ", user[0]["lastName"]);
    from.disabled = true;
    //console.log(dummyData)
    for(const  vl in dummyData){
        let opt = document.createElement("option");
        opt.value = dummyData[vl]["id"];
        opt.innerHTML = dummyData[vl]["firstName"].concat(" ", dummyData[vl]["lastName"]);
        cust.appendChild(opt)
    }
    //console.log(cust)
    //console.log(x.charAt(4), cust.value, amt.value)
    submit.onclick = function(e){
        e.preventDefault();
        //console.log(x.charAt(4), cust.value, amt.value)
        register(x.charAt(4), cust.value, amt.value);
        setTimeout(()=>{
            //window.history.back()
            window.location.href = "success.html"
        }, 500)
        
    }
})

async function getUser() {
    try {
      const response = await axios.get(url);
      //console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  async function register(from, to, amount) {
    try {
      const response = await axios.post(posturl,{
          from: from,
          to:to,
          amount: amount
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

function getUserById(id) {
    //console.log(dummyData)
    const res =  dummyData.filter(user =>{
        if(user.id == id){
            return user;
        }
    })
    return res
}


