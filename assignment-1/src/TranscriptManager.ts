import fs from 'fs'
import student_data from './../student_data.json'
import student_transcript from './../student_transcript.json'
import {STUDENT, TRANSCRIPT, COURSE_GRADE} from "./types"
/*
* here fs library is imported to read data from .json files
* students_data is imported to get all information about student (ID, NAME, etc.)
* student_transcript is imported to get all information about student grades. You can get the student grade using student ID from students_data file
* STUDENT, TRANSCRIPT, COURSE_GRADE. They are imported from types.ts file. They are manually build by me.
* */


/**
 *
 * New class created called TranscriptManager, inside of this class all item getters and setters will be written
 * Inside of this class I used Encapsulation inorder to security of student data and grades.
 * There is a new data type is written called STUDENT and new array created called "students". Inside the array, all elements in STUDENT type. The array is created as private inorder to data safety. The array is get from get_students public method.
 * There is a new data type is written called TRANSCRIPT and new array created called "transcripts". Inside the array all elements in TRANSCRIPT type. The array is created as private inorder to data safety. The array is get from get_transcription public method.
 *
 */


class TranscriptManager {
    private students: STUDENT[] = []
    private transcripts: TRANSCRIPT[] = []

    private load_students_data(){
        this.students = student_data as STUDENT[]
    }

    private load_students_transcripts(){
        this.transcripts = student_transcript as TRANSCRIPT[]
    }

    public initialize(){
        this.load_students_data()
        this.load_students_transcripts()
    }

    public get_students(): STUDENT[] {
        return this.students;
    }

    public get_transcripts(): TRANSCRIPT[] {
        return this.transcripts;
    }
}

export default TranscriptManager