let MarksOfSub1 = +prompt("enter your first subject number")
let MarksOfSub2 = +prompt("enter your second subject number")
let MarksOfSub3 = +prompt("enter your third subject number")
let MarksOfSub4 = +prompt("enter your fourth subject number")
let MarksOfSub5 = +prompt("enter your fifth subject number")

let SumOfAllSubjectsNumber = MarksOfSub1 + MarksOfSub2 + MarksOfSub3 + MarksOfSub4 + MarksOfSub5
let PercentageOfAllSubjects = SumOfAllSubjectsNumber /500 *100

document.write (PercentageOfAllSubjects)

if (PercentageOfAllSubjects >= 90){
    document.write("A+")
}else if (PercentageOfAllSubjects >= 80){
    document.write("A")
}else if (PercentageOfAllSubjects >= 70){
    document.write("B")
}else if (PercentageOfAllSubjects >= 60){
    document.write("c")
}
else{
    document.write(  " " +" SORRY YOU ARE Fail")
}