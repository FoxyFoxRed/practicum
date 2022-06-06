const personEditForm = document.querySelector("[name=user-form]");
const personInputs = personEditForm.querySelectorAll(".data-profile-input-wrapper");
const editPersonBtns = personEditForm.querySelectorAll("[form='user-form']");
const editPersonBtn = personEditForm.querySelector("#profile-edit-btn");
const cancelPersonBtn = personEditForm.querySelector("#profile-cancel-btn");
const personInfoItems = personEditForm.querySelectorAll("#profile-item-text");

const secirutyEditForm = document.querySelector("[name=security-form]");
const securityInputs = secirutyEditForm.querySelectorAll(".input-wrapper");
const editSecurityBtns = secirutyEditForm.querySelectorAll("[form='security-form']");
const editSecurityBtn = secirutyEditForm.querySelector("#security-edit-btn");
const cancelSecurityBtn = secirutyEditForm.querySelector("#security-cancel-btn");

editPersonBtn.addEventListener("click", function (event) {
  event.preventDefault();

  editPersonBtns.forEach((btn) => {
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  personInputs.forEach((input) => {
    if (input.classList.contains("hidden")) {
      input.classList.remove("hidden");
    }
  });

  personInfoItems.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});

cancelPersonBtn.addEventListener("click", function (event) {
  event.preventDefault();

  editPersonBtns.forEach((btn) => {
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  personInputs.forEach((input) => {
    input.classList.add("hidden");
  });

  personInfoItems.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    }
  });
});

editSecurityBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log('securityInputs', securityInputs);
  editSecurityBtns.forEach((btn) => {
    console.log('wtf', editSecurityBtns, btn, btn.classList);
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  securityInputs.forEach((input) => {
    if (input.classList.contains("hidden")) {
      input.classList.remove("hidden");
    }
  });
});

cancelSecurityBtn.addEventListener("click", function (event) {
  event.preventDefault();

  editSecurityBtns.forEach((btn) => {
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  securityInputs.forEach((input) => {
    input.classList.add("hidden");
  });
});