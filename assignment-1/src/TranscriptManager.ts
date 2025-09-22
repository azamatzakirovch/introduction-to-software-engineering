import students_data from "./../student_data.json"
import students_transcript from "./../student_transcript.json"
import {STUDENT, TRANSCRIPT} from "./types"

/*
 - students_data is imported to get the database of students.
 - students_transcript is imported to get the database of students.
*/

/*
 - TranscriptManager class created to make REST API. Inside of this class CRUD operations written. I used encapsulation methods inorder to safety of students data.
 - In home task slide professor said that I need to make initializer and make 4 default students data. I want to be a professional that's why I made transcripts and students database separately and saved them .json files.
*/
class TranscriptManager {
    private students : STUDENT[] = students_data;
    private transcript : TRANSCRIPT[] = students_transcript;

    private get_students() : STUDENT[] {
        return this.students;
    }

    private get_transcript() : TRANSCRIPT[] {
        return this.transcript;
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

}

export default new TranscriptManager();