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
    firstName: 'Rami',
    lastName: 'Rima',
    fullTimeEmployee: false,
    location: 'Paris',
    contract: false,
}
console.log(teacher2);

const director1: Directors = {
    firstName: 'Samia',
    lastName: 'Chelaoua',
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: 'Marseille',
    numberOfReports: 17,
}
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
