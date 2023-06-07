// console.log("hello from webpack")

import msg from "./message"
console.log(msg + " , sasaaaa")
/* od 09 lekcije*/
import * as action_creators from "./action_creators"
import store from "./store"

// store.dispatch(action_creators.START())

let tbody = document.querySelector("tbody")
let accountsBtn = document.querySelector("#accountsBtn")
let addAccountsBtn = document.querySelector("#addAccountsBtn")
let accountsView = document.querySelector("#accountsView")
let addAccountsView = document.querySelector("#addAccountsView")
let saveBtn = document.querySelector("#saveBtn")

//kad se loduje nas dok mi cemo dispecovati tj emitovti nas START action
window.addEventListener("load", () => {
  store.dispatch(action_creators.START())
})

store.subscribe(function () {
  displayAccounts()
  changeView()
})

accountsBtn.addEventListener("click", function () {
  store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
})

//moramo napraviti neku akciju koja ce menjati display: 1
addAccountsBtn.addEventListener("click", function () {
  store.dispatch(action_creators.DISPLAY_ADD_ACCOUNTS_ACTION())
})

saveBtn.addEventListener("click", function () {
  store.dispatch(
    action_creators.ADD_NEW_ACCOUNT({
      id: document.querySelector('[placeholder="id"]').value,
      name: document.querySelector('[placeholder="name"]').value,
      phone: document.querySelector('[placeholder="phone"]').value,
      email: document.querySelector('[placeholder="email"]').value,
    })
  )
  document.querySelector('[placeholder="id"]').value = ""
  document.querySelector('[placeholder="name"]').value = ""
  document.querySelector('[placeholder="phone"]').value = ""
  document.querySelector('[placeholder="email"]').value = ""
  store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION) //ovim se vraca display na 1
})

function changeView() {
  console.log(store.getState().displayData.display)
  let view = store.getState().displayData.display
  if (view == 1) {
    accountsView.style.display = "block"
    addAccountsView.style.display = "none"
  } else {
    accountsView.style.display = "none"
    addAccountsView.style.display = "block"
  }
}

//ACCOUNTSE iz state-a stavljamo u TBODY
function displayAccounts() {
  console.log(store.getState())
  //oni se nalaze u storu, ali moramo da pristupimo sa get state met i trazimo accounts
  let accounts = store.getState().accountsData.accounts
  let text = ``
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i]
    //test varijabla
    text += `
      <tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.phone}</td>
        <td>${account.email}</td>
        <td>
            <button class="btn btn-danger delete" data-id="${account.id}">Delete</button>
        </td>
      </tr>
    `
  }
  tbody.innerHTML = text
  let allDeleteBtns = document.querySelectorAll(".delete")

  for (let i = 0; i < allDeleteBtns.length; i++) {
    const btn = allDeleteBtns[i]
    btn.addEventListener("click", deleteAccount)
  }
}

function deleteAccount() {
  //   console.log(this.getAttribute("data-id"))
  let id = this.getAttribute("data-id")
  store.dispatch(action_creators.DELETE_ACCOUNT_ACTION(id))
}
