let theInput = document.querySelector(".add-task input"),
  theAddButton = document.querySelector(".add-task .plus"),
  taskContainer = document.querySelector(".task-content"),
  noTaskMessage = document.querySelector(".no-tasks-message"),
  taskCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector(".tasks-competed span");

window.onload = function () {
  theInput.focus();
  taskCount.innerHTML = taskContainer.children.length;
};

theAddButton.addEventListener("click", function () {
  if (theInput.value === "") {
  } else {
    // Remove No Task Message
    // noTaskMessage.remove();

    // Create Span Element
    let mainSpan = document.createElement("span");

    mainSpan.classList.add("task-box");

    mainSpan.innerHTML = `
        ${theInput.value}
        <span class="delete">Delete</span>
        `;

    taskContainer.appendChild(mainSpan);

    theInput.value = "";

    theInput.focus();
  }

  taskCount.innerHTML = taskContainer.children.length;
});

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }

  taskCount.innerHTML = taskContainer.children.length;
});

// taskCount = document.querySelector(".tasks-count span"),
// tasksCompleted = document.querySelector(".tasks-competed span");
