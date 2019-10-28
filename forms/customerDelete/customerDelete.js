customerDelete.onshow=function(){
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
        taCompanies2.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}


btnSearch11.onclick=function(){
    let companyNameDel = inptCustomer.value
// make sure the name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= results.length - 1; i++) {
        if (companyNameDel == results[i][0])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
 check = inptCustomer.value
  let query2 = "DELETE FROM customer WHERE name = " + '"' + check + '"'; 
  //alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query2)

    
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
        
    if (results.length == 0)   // the array is empty so no results returned             
        NSB.MsgBox("There are no companies with that name.")
    else {        
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
      
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        taCompanies.value = message
          for (var i = 0; i < companies.length; i++){ 
   if (companies[i] === companyNameDel) {
     companies.splice(i, 1); 
   }
 }
 taCompanies11.value = companies
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
  }
}