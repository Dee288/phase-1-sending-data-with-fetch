// Add your code here
function submitData (name, email){
return fetch(" http://localhost:3000/users",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
},
  body: JSON.stringify({
    name: 'diana',
    email: 'diana@diana.com'
})
}).then(function (response) {
    return response.json();
  })
  .then(function (users) {
    document.body.innerHTML=users['id']
  })
  .catch(function (error) { document.body.innerHTML = error.message})
}



/* the other solution
function submitData (name, email){

 fetch("function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      "method": "POST",
      "body": {
        name ,
        email
      }
    }).then(function(response) {
      return response.json();
    }).then(function(users) {
      document.body.innerHTML=users['id'];
      }).catch(function(error ) {document.body.innerHTML = error.message})
      
      return ":(";
    };
    , configurationObject);
 const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name,
    email,
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    document.body.innerHTML=users['id']
  })
  .catch(function (error) { document.body.innerHTML = error.message})
}
*/

  