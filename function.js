
 
 function calculateTax(income, expenses) {
    
    const profit =income - expenses;

   const tax = profit *.20;
    return tax; 

 }



function sendNotification(email) {

    if(email.indexOf("@") === -1){
        return "invalid Email";
    }
    const [username, domain] = email.split('@');

    if (!username || !domain) {
        return 'Invalid Email';
    }
    
    const notificationMessage = `${username} Zihad sent you an email from gmail.com ${domain}`;
    
    return notificationMessage;
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let char of name) {
        if (!isNaN(char) && char !== ' ') {
            return true;
        }
    }
    return false;
}



function calculateFinalScore(student) {
       const {name,testScore,schoolGrade,isFFamily}=student;

       if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    } 
    
    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Score Values";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}




function  waitingTime(waitingTimes  , serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / waitingTimes.length);
    const peopleLeftBefore = serialNumber - 1 - waitingTimes.length;

    if (peopleLeftBefore <= 0) {
        return " interview has already happened or is about to happen.";
    }
    const waitingTime = peopleLeftBefore * averageTime;

    return waitingTime;
}



 


