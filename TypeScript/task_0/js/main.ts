interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Nicolai',
    lastName: 'Cabaret',
    age: 27,
    location: 'Frejus',
}

const student2: Student = {
    firstName: 'Jordann',
    lastName: 'Miso',
    age: 21,
    location: 'Frejus',
}

const students: Student[] = [student1, student2];

    const studentTable = document.createElement('table');
    students.forEach(student => {
        const list = document.createElement('tr');
        const nameRow = document.createElement('td');
        const locationRow = document.createElement('td');
        nameRow.textContent = `${student.firstName}`;
        locationRow.textContent = `${student.location}`;
        list.appendChild(nameRow);
        list.appendChild(locationRow);

    studentTable.appendChild(list);
});
document.body.appendChild(studentTable);  
