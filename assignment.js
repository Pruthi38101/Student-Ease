const form = document.getElementById("assignmentForm");
const list = document.getElementById("assignmentList");

function loadAssignments() {
  const data = JSON.parse(localStorage.getItem("assignments")) || [];
  list.innerHTML = "";
  data.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <strong>Subject:</strong> ${item.subject}<br>
      <strong>Due:</strong> ${item.dueDate}<br>
      <a href="${item.pdf}" target="_blank">View PDF</a><br>
      <button onclick="deleteAssignment(${i})">❌ Delete</button>
    `;
    list.appendChild(div);
  });
}

function deleteAssignment(i) {
  const data = JSON.parse(localStorage.getItem("assignments")) || [];
  data.splice(i, 1);
  localStorage.setItem("assignments", JSON.stringify(data));
  loadAssignments();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = document.getElementById("subject").value;
  const dueDate = document.getElementById("dueDate").value;
  const pdfFile = document.getElementById("pdfFile").files[0];

  if (!subject || !dueDate || !pdfFile) return alert("All fields required");

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64 = reader.result;
    const data = JSON.parse(localStorage.getItem("assignments")) || [];
    data.push({ subject, dueDate, pdf: base64 });
    localStorage.setItem("assignments", JSON.stringify(data));
    form.reset();
    loadAssignments();
  };
  reader.readAsDataURL(pdfFile);
});

loadAssignments();
