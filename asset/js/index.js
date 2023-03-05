

  function validation(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let last_name = document.getElementById('last_name').value;
    let subject = document.getElementById('subject').value;
    let comments = document.getElementById('comments').value;
    let error1 = document.getElementById('error1');
    let error2 = document.getElementById('error2');
    let error3 = document.getElementById('error3');
    let error4 = document.getElementById('error4');
    let error5 = document.getElementById('error5');
    let text;
    let success = true;
    
    if(name.length < 5) {
        text = '*enter a valid fast name';
        success = false;
    } else {
        text = ' ';
    }
    error1.innerHTML = text;

    if(email.indexOf('@') == -1 || email.length < 6){
        text = '*enter a valid email name';
        success = false;
    } else {
        text = ' ';
    }
    error2.innerHTML = text;
    

    if(last_name.length < 5){
        text = '*enter a valid last name';
        success = false;
    } else { 
        text = ' ';
    }
    error3.innerHTML = text;
    if(subject.length < 6){
        text = '*enter a valid subject name';
        success = false;
    } else {
        text = ' ';
    }
    error4.innerHTML = text;

    if(comments.length < 60){
        text = '*enter a valid subject name';
        success = false;
    } else {
        text = ' ';
    }
    error5.innerHTML = text;

    if (success) {
        alert('submit successful');
        return true;
    } else {
        return false;
    }
  }