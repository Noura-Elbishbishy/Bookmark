// CRUD ---> create read update delete
let siteNameInput = document.getElementById('siteName')
let siteLinkInput = document.getElementById('siteLink')

 
let sitesContainer = [] //empty global array hnkhzn feh al links kol mara

if (localStorage.getItem('allSites')){  
  sitesContainer= JSON.parse(localStorage.getItem('allSites'))
  displaySite ()
}
function addWebsite (){
  let website = {
    name: siteNameInput.value,
    link: siteLinkInput.value,
  }
  sitesContainer.push(website)
 
  displaySite() 
  clearInput() 
  showAlert("Done successfully");

  localStorage.setItem('allSites' , JSON.stringify(sitesContainer))
}
function displaySite(){
  let tableRows = "";
  for (let i = 0; i < sitesContainer.length; i++) {
    let url = sitesContainer[i].link;
    //3lshan law mdkhlsh url s7 
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;  // htzwd http abl ay input 3lshan yshtghl s7
    }
    tableRows += `
      <tr class="justify-space-between">
        <td class="w-25" scope="row">${i + 1}</td>
        <td class="w-25" style="font-family: 'Roboto', sans-serif;">${sitesContainer[i].name}</td>
        <td class="w-25"><a class="btn button-30" href="${url}" target="_blank">Visit</a></td>
        <td class="w-25"><button onclick="deleteWebsite(${i})" class="btn button-30">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById('demo').innerHTML = tableRows;
}


function clearInput(){
  siteNameInput.value =""
  siteLinkInput.value =""

}


function deleteWebsite (index){ 
  sitesContainer.splice(index , 1)
  localStorage.setItem('allSites' , JSON.stringify(sitesContainer))
  displaySite()
  showAlertDelete()
}
function showAlert(message) {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'block';
 

  setTimeout(function() {
    customAlert.style.display = 'none';
  }, 3000);
}

function showAlertDelete(message, imageUrl) {
  var customAlertDelete = document.getElementById('customAlertDelete');
  customAlertDelete.style.display = 'block';
  setTimeout(function() {
    customAlertDelete.style.display = 'none';
  }, 3000);
}

