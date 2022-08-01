$(document).ready(function(){
    let studentInfor = {};
    let studentName;
    let studentId;
    let studentBirthYear;
    let studentClass;
    let studentMathScore;
    let studentPhysicScore;
    let studentChemistryScore;
    let studentEnglishScore;
    let averageScore;
    let rowNumber =$("tr");
    let numberOfSubject = $(".subject").length;
    let columnNumberLength = $("td").length;
    var studentsInfo = [];
    //render function
    function addAndRenderStudentRowInfo(studentInfor){
        for(let i = 0  ; i <studentsInfo.length;i++){
            var rowDataAppend =
                `<tr>
                    <td>${studentInfor.numberNoSTT}</td>
                    <td>${studentInfor.studentId}</td>
                    <td>${studentInfor.studentName}</td>
                    <td>${studentInfor.studentBirthYear}</td>
                    <td>${studentInfor.studentClass}</td>
                    <td class="subject">${studentInfor.studentMathScore}</td>
                    <td class="subject">${studentInfor.studentPhysicScore}</td>
                    <td class = "subject">${studentInfor.studentChemistryScore}</td>
                    <td class = "subject">${studentInfor.studentEnglishScore}</td>
                    <td id = "AverageScore">${studentInfor.averageScore}</td>
                    <td id ="modified"><button class="removeStudent" onclick="removeStudent(${i})">Delete</button></td>
                </tr>`;

        }
        $("#myTable").append(rowDataAppend);
    }


    // remove after put in data
    function clearInputForm(element1,element2,element3,element4,element5,element6,element7,element8){
        $(element1).val("");
        $(element2).val("");
        $(element3).val("");
        $(element4).val("");
        $(element5).val("");
        $(element6).val("");
        $(element7).val("");
        $(element8).val("");
    }
    //add studentInfor to array studentsInfo
    function addStudentToArrayStudents(studentInfor){
        studentsInfo.push(studentInfor);
    }

    // add student trigger btn
    $("#submitBtn").click(()=>{
        let numberNoSTT;
        rowNumber.each((i)=>{
            numberNoSTT = rowNumber[i].rowIndex+1;
        })

        studentInfor = {
            numberNoSTT,
            studentName : $("#student-name").val(),
            studentId : $("#student-ID").val(),
            studentBirthYear : $("#student-birth-year").val(),
            studentClass : $("#student-class").val(),
            studentMathScore : $("#math-score").val(),
            studentPhysicScore : $("#physic-score").val(),
            studentChemistryScore : $("#chemistry-score").val(),
            studentEnglishScore : $("#english-score").val(),
            averageScore : "?"
        }

        addAndRenderStudentRowInfo(studentInfor);
        addStudentToArrayStudents(studentInfor);
        clearInputForm("#student-name","#student-ID","#student-birth-year","#student-class","#math-score","#physic-score","#chemistry-score","#english-score");
        rowNumber =$("tr");
    });
    $("#averageCalculatorBtn").click(()=>{ // take value from table to calculate average point
        $("#myTable tr").each(function() {
            if (!this.rowIndex) return; // skip first row
            studentMathScore =Number($(this).children("td").eq(5).html());
            studentPhysicScore =Number($(this).children("td").eq(6).html());
            studentChemistryScore =Number($(this).children("td").eq(7).html());
            studentEnglishScore = Number($(this).children("td").eq(8).html());
            let sumAllSubject = studentMathScore + studentPhysicScore + studentChemistryScore + studentEnglishScore;
            let averageScore = sumAllSubject/numberOfSubject;
            $(this).children("td").eq(columnNumberLength-2).text(averageScore);
        });
    })
    $("#highScoreStudent").click(()=>{
        $("#myTable tr").each(function(){ //trong trường hợp bạn bind động dữ liệu html thì arrow function sẽ ko làm việc được.
            if (!this.rowIndex) return; // skip first row
            let averageScoreValue = Number($(this).children("td").eq(columnNumberLength-2).html());
            if(averageScoreValue>8.0){
                $(this).addClass("excellentStudent");
            }
        });
    });
    $("#badScoreStudent").click(()=>{
        $("#myTable tr").each(function(){ //trong trường hợp bạn bind động dữ liệu html thì arrow function sẽ ko làm việc được.
            if (!this.rowIndex) return; // skip first row
            let averageScoreValue = Number($(this).children("td").eq(columnNumberLength-2).html());
            if(averageScoreValue<5.0){
                $(this).addClass("neddImproveStudent");
            }
        });
    });
    //delete element studentInfor in array
    function removeStudent(i){    // anh đang bị khó chỗ này nếu để hàm này bên trong document.ready thì cái removeStudent class của button nó méo hiểu vì page chưa load xong còn để ra ngoài thì cái mảng studentsInfo nó lại không đọc dc nó ra undefined
        console.log(studentsInfo);
        studentsInfo.splice(i,1)
        console.log(studentsInfo);
    }
});

