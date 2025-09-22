import students_data from "./../student_data.json"
import students_transcript from "./../student_transcript.json"
import {STUDENT, TRANSCRIPT, GRADE} from "./types"

/*
 - students_data is imported to get the database of students.
 - students_transcript is imported to get the database of students.
*/

/*
 - TranscriptManager class created to make REST API. Inside of this class CRUD operations written. I used encapsulation methods inorder to safety of students data.
 - In home task slide professor said that I need to make initializer and make 4 default students data. I want to be a professional that's why I made transcripts and students database separately and saved them .json files.
*/
class TranscriptManager {
    /*
    INSIDE OF THIS FILE ... METHODS CREATED.
    - students list created in STUDENTS data type.
    - transcripts list created in TRANSCRIPT data type.
    - private method created and called get_students to get all students. It is private method in order ot data safety.
    - private method created and called get_transcript to get all students' transcript. Also, this method in private mode in order to data safety.
    - public method created and called all_students to return total student in server. This method is public and used get_students private method. Here Encapsulation method is used as I said data safety.
    - public method created and called all_transcripts to return total students' transcripts in server. This method is public and used get_transcript private method. Here Encapsulation method is used as I said data safety.
    - public method created and called get_student_by_id. This method returns a students' data of one student, this student found by student ID.
    - public method created and called get_transcript_by_id. This method returns a students' transcript of one student, this students' transcript found by student ID.
    - public method created and called add student and make_id methods. This function is made for add new student.
    - public method created and called delete_student. This function will delete the student by student ID.
    - public method created and called add_grade. This method add grades to student after creating new student or add new subject + grade to new student.
    - public method created and called get_grade. This method return the grade of student.
    */
    private students : STUDENT[] = students_data;
    private transcripts : TRANSCRIPT[] = students_transcript;

    private get_students() : STUDENT[] {
        return this.students;
    }

    private get_transcript() : TRANSCRIPT[] {
        return this.transcripts;
    }

    private make_id() : number {
        const all = this.get_students();
        const ID = all[all.length - 1].ID;
        return ID + 1;
    }

    public all_students() : STUDENT[] {
        return this.get_students();
    }

    public all_transcripts() : TRANSCRIPT[] {
        return this.get_transcript();
    }

    public get_student_by_id(identification : number) : STUDENT | undefined {
        return this.get_students().find((student) => student.ID === identification);
    }

    public get_transcript_by_id(identification: number) : TRANSCRIPT | undefined {
        return this.get_transcript().find((transcript) => transcript.ID === identification);
    }

    public add_student(
        name:string,
        last_name: string,
        email:string,
        school: string,
        education_program: string,
        phone: string)
        : void{
        const new_identification = this.make_id();
        const new_student : STUDENT = {
            ID : new_identification,
            NAME : name,
            LASTNAME : last_name,
            EMAIL : email,
            SCHOOL : school,
            EDUCATION_PROGRAM : education_program,
            PHONE : phone,
        }

        const new_transcript : TRANSCRIPT = {
            ID : new_identification,
            GRADES : []
        }

        this.students.push(new_student);
        this.transcripts.push(new_transcript);

        console.log(`Student Added with ID${new_identification}`);
    }

    public delete_student(identification : number) : void{

        this.students.filter(a => a.ID != identification);
        this.transcripts.filter(a => a.ID != identification);

        console.log(`Student deleted with ID${identification}`);
    }

    public add_grade(identification: number, subject: string, grade: number): void {
        const new_grade: GRADE = {
            COURSE: subject,
            GRADE: grade
        };

        const current_students_transcript = this.get_transcript().find((transcript) => transcript.ID === identification);

        if (current_students_transcript) {
            current_students_transcript.GRADES.push(new_grade);
            console.log(`Grade added for student with ID ${identification}: ${subject} - ${grade}`);
        } else {
            console.log(`Transcript not found for student with ID ${identification}.`);
        }
    }

    public get_grade(identification: number, course: string): number {
        const transcript_of_student = this.get_transcript().find((transcript) => transcript.ID === identification);

        if (transcript_of_student) {
            const grade = transcript_of_student.GRADES.find(a => a.COURSE === course);

            if (grade) {
                return grade.GRADE;
            } else {
                console.log(`Course "${course}" not found for student with ID ${identification}`);
                return -1;
            }
        } else {
            console.log(`Transcript not found for student with ID ${identification}`);
            return -1;
        }
    }
}

export default new TranscriptManager();

/*
This code is made by Dr Azamat E. Zakirovch for Introduction to Software Engineering subject homework 1.
*/