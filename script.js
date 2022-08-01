let nextStepBtn = document.getElementById('next-step-btn');
function notify() {
    alert('Please fill these following infomation !');
    let personName = prompt('Please enter your name');
    let personCity = prompt('Please enter your city');
    let personMobile = prompt('Please enter your mobile number');
    let personJob= prompt('Please enter your Job:');
    let personEmail= prompt('Please enter your E-mail:');
    let personAddress= prompt('Please enter your Address:')
    let personBirthYear = prompt('Please enter your Birth year');
    const today = new Date();//get current date,month,year,time and save to variable today
    const currentYear = today.getFullYear(); // get current year and save to variable currentYear.
    /**
     * @param{string} personName
     * @description print personName to p tag which have id is name
     */
    function printPersonName(personName){
        if (personName != null) {
          document.getElementById('name').innerHTML ='Your Name is: '+ personName;
        }
    }
    /**
     * @param{string} personCity
     * @description print personCity to p tag which have id is city
     */
    function printPersonCity(personCity){
        if (personCity != null) {
          document.getElementById('city').innerHTML ='Your city is: '+personCity;
        }
    }
    /**
     * @param{string} personMobile
     * @description print personMobile to p tag which have id is mobile
     */
    function printPersonMobile(personMobile){
        if ( personMobile != null ) {
            document.getElementById('mobile').innerHTML = 'your phone number: '+personMobile;
        }
    }
    /**
     * @param{string} personAge
     * @description print person age to p tag which have id is age by using their birth year value(personBirthYear). Re-enter birth year if its value is greater than current year(currentYear).
     */
    function printPersonAge(personBirthYear){
        /**
        * @param{string} personBirthYear
        * @param{number} personBirthYearInt
        * @param{number} currentYear
        * @returns{number}
        * @description calculate age of the person depend on their person birthYear and current year values.
        */
        const ageCalculator = (personBirthYear) => {
            let personBirthYearInt = parseInt(personBirthYear);
            let personAge = currentYear - personBirthYearInt;
            return personAge;
        }
        if (personBirthYear != null && personBirthYear < currentYear  ) {
            document.getElementById('age').innerHTML = 'your age: '+ageCalculator(personBirthYear);
        }
        else{
            while(personBirthYear >= currentYear){
                var personBirthYear = prompt('Please re-enter your Birth year');
            }
            document.getElementById('age').innerHTML = 'your age: '+ ageCalculator(personBirthYear);
        }
    }
    /**
     * @param{string} personJob
     * @description print person job to p tag which have id is job
     */
    function printPersonJob(personJob){
        if ( personJob != null) {
            document.getElementById('job').innerHTML = 'your Job: '+personJob;
        }
    }
    /**
     * @param{string} personEmail
     * @description print person email to p tag which have id is e-mail.
     */
    function printPersonEmail(personEmail){
        if ( personEmail != null) {
            document.getElementById('e-mail').innerHTML = 'your E-mail: '+personEmail;
        }
    }
    /**
     * @param{string} personAddress
     * @description print person address to p tag which have id is address
     */
    function printPersonAddress(personAddress){
        if ( personAddress != null) {
            document.getElementById('address').innerHTML = 'your Address: '+personAddress;
        }
    }
    printPersonName(personName);
    printPersonCity(personCity);
    printPersonMobile(personMobile);
    printPersonAge(personBirthYear);
    printPersonJob(personJob);
    printPersonEmail(personEmail);
    printPersonAddress(personAddress);
}
/**
* @param{object} nextStepBtn.
* @description show Next step button when notify have executed completely.
*/
let ShowNextStepBtn = (nextStepBtn)=>{
    nextStepBtn.style.display = 'block';
}
function fillInfomation() {
    notify();
    ShowNextStepBtn(nextStepBtn);
}
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const average={
    max:70,
    min:30
  }

  // Only change code below this line
  const half = ({max,min}) => {return (max + min) / 2.0};
  console.log(half(average));
  // Only change code above this line