export function EducationForm(id, school, degree, startDate, endDate, location) {
  this.id = id;
  this.school = school;
  this.degree = degree;
  this.startDate = startDate;
  this.endDate = endDate;
  this.location = location;
}

export function ExperienceForm(
  id,
  companyName,
  position,
  startDate,
  endDate,
  location,
  description
) {
  this.id = id;
  this.companyName = companyName;
  this.position = position;
  this.startDate = startDate;
  this.endDate = endDate;
  this.location = location;
  this.description = description;
}
