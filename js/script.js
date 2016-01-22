
var myList=[ 
{"id_value":1,"id_result":"success","all_season_value":69,"all_season_result":"Fail! ","current_season_value":591,"current_season_result":"Fail!  "},
{"id_value":2,"id_result":"success","all_season_value":40,"all_season_result":"success","current_season_value":568,"current_season_result":"success"},
{"id_value":3,"id_result":"success","all_season_value":5,"all_season_result":"success","current_season_value":217,"current_season_result":"success"}
];

function buildTable() {
  
     var columns = addAllColumnHeaders(myList);
     var table = document.getElementById("dataTable");

     for (var i = 0 ; i < myList.length ; i++) {

      var row = table.insertRow(i+1);

          for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {

            var cellValue = myList[i][columns[colIndex]];
            if (cellValue != null) {
              var cell = row.insertCell(colIndex);
              cell.innerHTML = cellValue;
            }       
         }
     }
 }

 function addAllColumnHeaders(myList)
 {
     var columnSet = new Array;
     var n= 0;
     var table = document.getElementById("dataTable");
     var header = table.createTHead();
     var row = header.insertRow(0);
    
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         
         for (var key in rowHash) {
             
             if (columnSet.indexOf(key) == -1 ){
              columnSet.push(key); 
              var cell = row.insertCell(n);
              cell.innerHTML = key ;
              n++;
             }
         }
     }
     return columnSet;
 }