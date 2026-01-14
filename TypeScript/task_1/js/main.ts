interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: 'Remi',
    lastName: 'Marcais',
    fullTimeEmployee: true,
    yearsOfExperience: 2,
    location: 'Marseille',
}

const teacher2: Teacher = {
    firstName: 'Rami',
    lastName: 'Rima',
    fullTimeEmployee: false,
    yearsOfExperience: 1,
    location: 'Paris',
}

const teachers: Teacher[] = [teacher1, teacher2];

    const studentTable = document.createElement('table');
    teachers.forEach(teacher => {
        const list = document.createElement('tr');
        const nameRow = document.createElement('td');
        const locationRow = document.createElement('td');
        nameRow.textContent = `${teacher.firstName}`;
        locationRow.textContent = `${teacher.location}`;
        list.appendChild(nameRow);
        list.appendChild(locationRow);

    studentTable.appendChild(list);
});
document.body.appendChild(studentTable);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
