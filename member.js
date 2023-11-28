function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "React", "Node", "Python", "C++", "C#", "Java", "SQL"];
    var skillsString = skills.join(", ");
    document.getElementById("skills").innerHTML = skillsString;
}