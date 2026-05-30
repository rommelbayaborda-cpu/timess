document.getElementById("scheduleForm").addEventListener("submit", function(e){

    e.preventDefault();

    let dateCalled = document.getElementById("dateCalled").value;
    let room = document.getElementById("room").value;
    let hospitalNo = document.getElementById("hospitalNo").value;
    let procedure = document.getElementById("procedure").value;
    let schedule = document.getElementById("schedule").value;
    let doctor = document.getElementById("doctor").value;
    let co = document.getElementById("co").value;
    let radtech = document.getElementById("radtech").value;

    let table = document.getElementById("scheduleTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${dateCalled}</td>
        <td>${room}</td>
        <td>${hospitalNo}</td>
        <td>${procedure}</td>
        <td>${schedule}</td>
        <td>${doctor}</td>
        <td>${co}</td>
        <td>${radtech}</td>
    `;

    document.getElementById("scheduleForm").reset();
});