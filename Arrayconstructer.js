class car {
    constructor(name,series,model) {
      this.name=name;
      this.series=series;
      this.model=model;
    }
  }
  var car1 = new car('BMW','Q5',1997);
  var car2= new car('suzuki','Beleno',2000);
  var car3 = new car('renault', 'Kwid',2025);
  
  const displaybook_info =(car) =>
  {
    console.log(`title:${car.name}`);
  console.log(`author:${car.series}`);
  console.log(`year:${car.model}`);
}
  displaybook_info(car1);