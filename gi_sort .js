"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 4

   Author: Nicholas Le
   Date: 04/05/19  
   
   Filename: gi_sort.js
   
   Global Variables:
   tableData
      An 2-dimensional array of the data found in the body of the web table
      
   dataCategories
      An array of the column titles found the head of the web table
      
   sortIndex
      The index number of the column by which the web table should be
      sorted where 0 = 1st column, 1 = 2nd column, etc.
      
   sortDirection
      A value indicating direction of the sorting where a value of 1 sorts 
      the data in ascending order and a value of -1 sorts the data in descending order
	
   
   
   Functions List:   
   defineDataArray()
      Extracts values from the body of the web table and stores them in the
      tableData array
      
   writeTableData()
      Writes the sorted data into the table rows and cells       
      
   defineColumns()
      Extracts values form the column heads of the web table and stores 
      them in the dataCategories array; also sets up the onclick event
      handlers for the column heads so that the table can be sorted by
      clicking a table heading cell.
           
   columnSort(e)
      Event handler function that sorts the table data when a column
      heading is clicked  
   
   dataSort2D(a, b)
      Compare function used to sort numeric and alphabetical data from
      a 2-dimensional array 
    

*/
//Global Variables
var tableData = [];

var dataCategories = [];

var sortIndex = 0;

var sortDirection = 1;

window.addEventListener("load", function () {
      defineDataArray();
      writeTableData();
});
//The purpose of this function is to populate the tableData array as a two-dimensional array 
function defineDataArray() {
      var tableData = document.querySelectorAll("table.sortable tbody tr");

      for (var i = 0; i < tableRows.length; i++) {
            var rowCells = i.children;
            var rowValues = [rowCells[i]];

            for (var i = 0; i < rowCells.length; i++) {
                  rowValues += rowCells;
            }
            tableData += rowValues;
      }
      tableData.sort(dataSort2D(a, b));
}
// Writes the sorted data into the table rows and cells
function writeTableData() {
      for (var i = 0; i < array.length; i++) {

      }
}






function dataSort2D(a, b) {
      if (isNaN(parseFloat(a[sortIndex])) === false) {
            return (a[sortIndex] - b[sortIndex]) * sortDirection;
      } else {
            var astring = a[sortIndex].toLowerCase();
            var bstring = b[sortIndex].toLowerCase();

            if (bstring > astring) return -sortDirection;
            if (bstring < astring) return sortDirection;
            return 0;
      }
}