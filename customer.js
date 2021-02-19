const url = "https://zbubi.sse.codesandbox.io/customer/infor";
document.addEventListener('DOMContentLoaded',async ()=>{
    var table = document.getElementById("cust-table");
    var dummyData = await getUser();
    console.log(dummyData)
    //creating table header
    let thead = document.createElement("thead")
    let tr = document.createElement("tr");
    let id = document.createElement("th")
    id.setAttribute("scope", "col")
    id.innerHTML = "S. No";
    let name = document.createElement("th")
    name.setAttribute("scope", "col")
    name.innerHTML = "NAME" ;
    let account = document.createElement("th")
    account.setAttribute("scope", "col")
    account.innerHTML = "Balance";
    let email = document.createElement("th")
    email.setAttribute("scope", "col")
    email.innerHTML ="Email";
    let address = document.createElement("th")
    address.setAttribute("scope", "col")
    address.innerHTML ="Address";
    let view = document.createElement("th")
    let transact = document.createElement("th")
    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(account);
    tr.appendChild(email);
    tr.appendChild(address);
    tr.appendChild(view);
    tr.appendChild(transact);
    thead.appendChild(tr)
    table.appendChild(thead)

    
    for(const  vl in dummyData){
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.innerHTML = dummyData[vl]["id"]
        let name = document.createElement("td")
        name.innerHTML =dummyData[vl]["firstName"].concat(" ", dummyData[vl]["lastName"])
        let account = document.createElement("td")
        account.innerHTML = dummyData[vl]["currentBalance"];
        let email = document.createElement("td")
        email.innerHTML = dummyData[vl]["email"];
        let address = document.createElement("td")
        address.innerHTML = dummyData[vl]["address"];
        let viewBtn =  document.createElement("button")
        viewBtn.innerHTML = "View"
        viewBtn.onclick = function(){redirect( dummyData[vl]["id"], "customerDetail.html")}
        let transactBtn =  document.createElement("button")
        transactBtn.innerHTML = "Transact";
        transactBtn.onclick = function(){redirect( dummyData[vl]["id"], "form.html")}
        
        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(account)
        tr.appendChild(email)
        tr.appendChild(address)
        tr.appendChild(viewBtn)
        tr.appendChild(transactBtn)
        table.appendChild(tr)
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

const redirect =(id, loc)=>{
    window.location.href = `${loc}?id=${id}`
}