function createUserTable(users) {
    // Start building the table HTML string
    let html = `<table data-user="sanjana.bonthais@gmail.com">
<thead>
<tr><th>Name</th><th>Age</th><th>Gender</th></tr>
</thead>
<tbody>`;

    // Iterate over the user array to add rows for each user
    users.forEach(user => {
        html += `<tr>
<td>${user.name || ''}</td>
<td>${user.age || ''}</td>
<td>${user.gender || ''}</td>
</tr>`;
    });

    // Close the table tag
    html += `</tbody>
</table>`;

    return html;
}

// Example usage:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35, gender: "" }
];

console.log(createUserTable(users));