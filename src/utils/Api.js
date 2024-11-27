const baseUrl = "http://localhost:3001";

// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   function request(url, options) {
//     return fetch(url, options).then(checkResponse);
//   }
// }
function getItems() {
  // const url = `${baseUrl}/items`; 
  //options={method: "GET"}
  // return request(url,options); 
  return fetch(`${baseUrl}/items`, { method: "GET" }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
function deleteItem(item) {
  return fetch(`${baseUrl}/items/${item._id}`, {
    method: "DELETE",
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
export { getItems, addItem, deleteItem };
