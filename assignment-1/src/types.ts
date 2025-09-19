export type STUDENT = {
    ID : number,
    NAME : string,
    LASTNAME: string,
    EMAIL: string,
    SCHOOL: string,
    EDUCATION_PROGRAM: string,
    PHONE: string,
}

export type COURSE_GRADE = {
    COURSE : string,
    GRADE : number,
}

export type TRANSCRIPT = {
    ID : number,
    GRADES : COURSE_GRADE[],
}