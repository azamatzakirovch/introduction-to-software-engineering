import student_data from './../student_data.json'
import student_transcript from './../student_transcript.json'
import {STUDENT, TRANSCRIPT, COURSE_GRADE} from "./types"
/*
* here fs library is imported to read data from .json files
* students_data is imported to get all information about student (ID, NAME, etc.)
* student_transcript is imported to get all information about student grades. You can get the student grade using student ID from students_data file
* STUDENT, TRANSCRIPT, COURSE_GRADE. They are imported from types.ts file. They are manually build by me. STUDENT, TRANSCRIPT, COURSE_GRADE data type is nonpreemptive. You can open types.ts file and check what kind of primitive data types allowed to enter STUDENT, TRANSCRIPT, COURSE_GRADE types
* */


/**
 New class created called TranscriptManager, inside of this class all item getters and setters will be written
 Inside of this class I used Encapsulation inorder to security of student data and grades.
 */


class TranscriptManager {

    /*
    There is a new data type is written called STUDENT and new array created called "students". Inside the array, all elements in STUDENT type. The array is created as private inorder to data safety. The array is get from get_students public method.
    There is a new data type is written called TRANSCRIPT and new array created called "transcripts". Inside the array all elements in TRANSCRIPT type. The array is created as private inorder to data safety. The array is get from get_transcription public method.
    There is public get_students and get_transcripts methods created for total students data and transcripts data respectively.
    There is public add_student method created to add new student. All data is coming from server. New newStudent variable created in STUDENT type and the data saved to .json file, also added enw transcript file with empty grades.
    There is public add_grade method created to add new student. All dats is coming from server. After student created you can use add_grade method to add the grades of student.

    */

    private students: STUDENT[] = []
    private transcripts: TRANSCRIPT[] = []

    constructor(){
        this.students = student_data as STUDENT[];
        this.transcripts = student_transcript as TRANSCRIPT[];
    }

    public get_students() {
        return this.students;
    }

    public get_transcript() {
        return this.transcripts;
    }

    public add_student(name:string, lastname:string, email:string, school:string, education_program:string, phone:string):void {
        const new_id = Math.max(...this.get_students().map(student => student.ID)) + 1;

        const newStudent: STUDENT = {
            ID: new_id,
            NAME: name,
            LASTNAME: lastname,
            EMAIL: email,
            SCHOOL: school,
            EDUCATION_PROGRAM: education_program,
            PHONE: phone
        };
        this.students.push(newStudent);

        const addTranscript: TRANSCRIPT = {
            ID: new_id,
            GRADES: []
        }
        this.transcripts.push(addTranscript);
    }

    public add_grade(id : number, course : string, grade : number):void {
        const transcript = this.transcripts.find((transcript) => transcript.ID === id);

        if (!transcript) {
            throw new Error(`${id} not found!`);
        }

        const existingGrade = transcript.GRADES.find(g => g.COURSE === course);
        if (existingGrade) {
            throw new Error(`Grade is already exist`);
        }

        const newGrade : COURSE_GRADE = {
            GRADE: grade,
            COURSE: course,
        }

        transcript.GRADES.push(newGrade);
    }



}

export default TranscriptManager