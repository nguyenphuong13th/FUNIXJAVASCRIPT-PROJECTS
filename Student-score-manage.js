let studentInfomationArray = [];
document.addEventListener('DOMContentLoaded',()=>{renderStudents();});
const studentName = document.getElementById('student-name');
const studentId = document.getElementById('student-ID');
const studentBirthYear = document.getElementById('student-birth-year');
let studentClass = document.getElementById('student-class');
let studentMathScore = document.getElementById('math-score');
let studentPhysicScore = document.getElementById('physic-score');
let studentChemistryScore = document.getElementById('chemistry-score');
let studentEnglishScore = document.getElementById('english-score');
let NumberOfSubject = document.getElementsByClassName('subject').length;
let columnNumber = document.getElementsByTagName('th').length;
var table = document.getElementById('myTable');
let tableBodyArea = document.getElementById('renderDataArea');
const submitBtn = document.getElementById('submitBtn');
const avgCalculatorBtn = document.getElementById('averageCalculatorBtn');
const highScoreStudentBtn = document.getElementById('highScoreStudentBtn');
const lowScoreStudentBtn = document.getElementById('badScoreStudentBtn');
/**
     * @param{string} studentNameIDValueinfo1,studentNameValueinfo2,studentBirthYearValueinfo3,studentClassValueinfo4,studentMathScoreValueinfo5,studentPhysicScoreValueinfo6,studentChemistryScoreValueinfo7,studentEnglishScoreValueinfo8
     * @param{number}numberofRowSST
     * @description add student information as well as render it to html
*/
let addInfo = (studentNameIDValueinfo1,studentNameValueinfo2,studentBirthYearValueinfo3,studentClassValueinfo4,studentMathScoreValueinfo5,studentPhysicScoreValueinfo6,studentChemistryScoreValueinfo7,studentEnglishScoreValueinfo8)=>{
    if(studentNameIDValueinfo1,studentNameValueinfo2,studentBirthYearValueinfo3, studentClassValueinfo4, studentMathScoreValueinfo5, studentPhysicScoreValueinfo6, studentChemistryScoreValueinfo7 &&studentEnglishScoreValueinfo8 !== null ){
        var studentInfomation = {
            name : studentName.value,
            birthYear:studentBirthYear.value,
            ID:studentId.value,
            Class:studentClass.value,
            match:studentMathScore.value,
            physic:studentPhysicScore.value,
            chemistry:studentChemistryScore.value,
            English:studentEnglishScore.value
        };
        studentInfomationArray.push(studentInfomation);
    }
    else{
        alert('Please fill all field !');// alert fill all field
    }
}
/**
    * @param{string} studentName,studentBirthYear,studentId,studentClass,studentMathScore,studentPhysicScore,studentChemistryScore,studentEnglishScore
     * @description remove input value from form after submit button was pressed
*/
let reMoveAfter = (studentName,studentBirthYear,studentId,studentClass,studentMathScore,studentPhysicScore,studentChemistryScore,studentEnglishScore)=>{
    studentName.value='';
    studentBirthYear.value='';
    studentId.value='';
    studentClass.value='';
    studentMathScore.value='';
    studentPhysicScore.value='';
    studentChemistryScore.value='';
    studentEnglishScore.value='';
}
/**
    * @param{array} studentInfomationArray
    * @param{string} html,htmls
    * @description render table data to html
*/
function renderStudents(){
    let htmls = studentInfomationArray.map(function(student,index){
        return`<tr>
            <td data-label='STT'>${index+1}</td>
            <td data-label='ID'>${student.ID}</td>
            <td data-label='Name'>${student.name}</td>
            <td data-label='Birth Year'>${student.birthYear}</td>
            <td data-label='Class'>${student.Class}</td>
            <td data-label='Match Score' class='matchPointData'>${student.match}</td>
            <td data-label='Physic Score' class='physicPointData'>${student.physic}</td>
            <td data-label='Chemical Score' class ='chemicalPointData'>${student.chemistry}</td>
            <td data-label='Englis Score' class ='englishPointData'>${student.English}</td>
            <td data-label='Average Score' id ="AverageScore"></td>
            <td data-label='Edit'><button class="deleteStudent" onclick="onRemoveStudent(${index})">Delete</button></td>
        </tr>`
    });
    let html = htmls.join("");
    tableBodyArea.innerHTML = html;
}
/**
    * @param{function} removeStudent,renderStudents
    * @description remove student and render data to html
*/
function onRemoveStudent(index){
    removeStudent(index);
    renderStudents();
}
/**
    * @param{array} studentInfomationArray
    * @description remove student from array
*/
function removeStudent(index){
    studentInfomationArray.splice(index,1);
}
/**
    * @param{number} rowNumberlength , calculateTo ,calculateFrom , avarageValue,rowSumValue
    * @description calculate the average point of each student and render it to html
*/
let AvarageCalculator = (rowNumberlength) => {
    let calculateFrom = 5 ;
    let calculateTo = calculateFrom + (NumberOfSubject-1);
    for(let i=1;i<=rowNumberlength;i++){
        let AvarageValue = table.rows[i].cells;// define a location of cell by index
        let rowSumValue = 0;
        for(j=calculateFrom;j<=calculateTo;j++){
            rowNextValue =Number(table.rows[i].cells[j].innerHTML);
            rowSumValue = rowSumValue +  rowNextValue;
        }
        let rowValueAvarage = rowSumValue/NumberOfSubject;
        AvarageValue[columnNumber-2].innerHTML = rowValueAvarage.toFixed(2);
    }
}
/**
     * @param{number} rowNumberlength
     * @description find the student which have average score > 8 and highlight it
     */
 let ShowhighScoreStudent = (rowNumberlength)=>{
    for(let i=1;i<=rowNumberlength;i++){
        if(Number(table.rows[i].cells[columnNumber-2].innerHTML)>8.0){
            table.rows[i].style.backgroundColor='#1d8957';
        }
    }
}
/**
 * @param{number} rowNumberlength
 * @description find the student which have average score < 5 and highlight it
 */
let ShowlowScoreStudent = (rowNumberlength)=>{
    for(let i=1;i<=rowNumberlength;i++){
        if(Number(table.rows[i].cells[columnNumber-2].innerHTML)<5.0){
            table.rows[i].style.backgroundColor='#dd3d4c';
        }
    }
}
// Button to trigger function
submitBtn.addEventListener('click',function(){
    addInfo(studentId.value,studentName.value,studentBirthYear.value,studentClass.value,studentMathScore.value,studentPhysicScore.value,studentChemistryScore.value,studentEnglishScore.value);
    reMoveAfter(studentName,studentBirthYear,studentId,studentClass,studentMathScore,studentPhysicScore,studentChemistryScore,studentEnglishScore);
    renderStudents();
});
avgCalculatorBtn.addEventListener('click',()=>{
    AvarageCalculator(studentInfomationArray.length);
});
highScoreStudentBtn.addEventListener('click',()=>{
    ShowhighScoreStudent(studentInfomationArray.length);
})
lowScoreStudentBtn.addEventListener('click',()=>{
    ShowlowScoreStudent(studentInfomationArray.length)
})
