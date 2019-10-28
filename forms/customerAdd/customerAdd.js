
btnAddCustomer.onclick=function(){
    let query4 = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
// alert(query4)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query4);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            //let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the company!")
        } else
            NSB.MsgBox("There was a problem with adding the company to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
    let query5 = "SELECT DISTINCT name FROM customer;"  
    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query5)

    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("Error")
    else {        
        // output the names of all the customers
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        taCurrentCustomers.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
