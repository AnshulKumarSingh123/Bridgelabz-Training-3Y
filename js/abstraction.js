class student {
    #studentId;
    #getDetails() {
        this.#studentId = 101;
        console.log("StudentId :- " + this.#studentId);
    }
    commonMethod() {
        this.#getDetails();
    }
}
const a = new student();
a.commonMethod();