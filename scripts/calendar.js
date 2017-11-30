class calendar {
  constructor(year, month) {
    if (year == undefined) {
      var current_date = new Date() ;

      this.year  = current_date.getFullYear() ;
      this.month = current_date.getMonth() + 1 ;

    }
    else if (month == undefined) {
    }
    else {
      this.year = year;
      this.month = month;
    }

    var nameOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    this.monthName = nameOfMonths;
    this.week = weekDays;
  }

  get_year() {
    return this.year;
  }
  get_month() {
    return this.month;
  }
  increase_month() {
    this.month ++;

    if(this.month > 12) {
      this.month = 1;
      this.year ++;
    }
  }

  decrease_month() {
    this.month --;
    if(this.month < 1) {
      this.month = 12;
      this.year --;
    }
  }
  increase_year() {
    this.year ++;
  }
  decrease_year() {
    this.year --;
  }

  printCalendar() {
    var date = new Date()
  }
}
