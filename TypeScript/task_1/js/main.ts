interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'Remi',
    lastName: 'Marcais',
    fullTimeEmployee: true,
    yearsOfExperience: 2,
    location: 'Marseille',
}

const teacher2: Teacher = {
    firstName: 'Remi',
    lastName: 'Marcais',
    fullTimeEmployee: false,
    location: 'Laval',
    contract: false,
}
console.log(teacher2);

const director1: Directors = {
    firstName: 'Julien',
    lastName: 'Cyr',
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: 'Paris',
    numberOfReports: 17,
}
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
