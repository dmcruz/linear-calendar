'use strict';

var cal_days_labels = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var cal_months_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var cal_current_date = new Date();
 
function Calendar(month, year) {
  this.month = !month ? 0 : month;
  this.year  = !year ? cal_current_date.getFullYear() : year;
  this.html = '';
}
Calendar.prototype.generateHTML = function(){
  var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // leap year
  if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
    cal_days_in_month[1] = 29;
  }
 
  var html = '<table class="calendar-table">';
  html += '<tr><td colspan="31" align="center"><b>';
  html += this.year;
  html += '</b></td></tr>';
 
  for(var i = 0; i <= 11; i++ ){
    html += '<tr>';
    html += '<td>';
    html += cal_months_labels[i];
    html += '</td>';
    for(var j=0; j < cal_days_in_month[i]; j++){
      var curday = new Date(this.year, i, j + 1);
      html += '<td class="day ' + cal_days_labels[curday.getDay()] + '">';
      html += j + 1;
      html += '</td>';
                }
                html += '</tr>';
  }
  html += '</table>';
  this.html = html;
}
Calendar.prototype.getHTML = function() {
  return this.html;
}