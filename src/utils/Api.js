const baseUrl = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}
function checkResponse(res) {
  if (res.ok) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
}
function getItems() {
  return request(`${baseUrl}/items`);
}
function addItem(item) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}
function deleteItem(item) {
  return request(`${baseUrl}/items/${item._id}`, {
    method: "DELETE",
  });
}
export { getItems, addItem, deleteItem };
