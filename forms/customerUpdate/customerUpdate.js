customerUpdate.onshow=function(){
    let query = "SELECT DISTINCT name FROM customer;"  
    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query)

    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        companies = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("Error")
    else {        
        // output the names of all the customers
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        taCompanies21.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}



btnChange.onclick=function(){
    let oldName = inptCompany.value
    let newName = inptChange.value
    let query9 = 'UPDATE customer SET name = ' + '"' + newName + '"' + ' WHERE name = ' + '"' + oldName + '"' + ';'
    console.log(query9)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query9)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed the company name.")
        } else
            NSB.MsgBox("There was a problem changing the company name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
    let query10 = "SELECT DISTINCT name FROM customer;"  
    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query10)

    if (req1.status == 200) { //transit worked.
        result = JSON.parse(req1.responseText)
    if (result.length == 0)
        NSB.MsgBox("Error")
    else {        
        // output the names of all the customers
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        taCompanies111.value = message
    }    
  }
}


