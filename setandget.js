var car =
{
    name :'suzuki',
    model :'beleno',
    year :2015,
    //Getter
    get carname()
    {
        return this.name+""+this.model;
    },
    set Updatemodel(_newmodel)
    {
        this.model=_newmodel;
    }
}
console.log("using Get :",car.Carname)
car.Updatemodel="Swift";
console.log("using Set :",car.name,car.model)
