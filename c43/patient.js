class Patient{
constructor(){
    this.name=null;
    this.age=null;
    this.email=null;
    this.disease=null;
this.index=0;

}
getInfo(){

}
updateInfo(){
    console.log("in");
    var patientIndex = "patients/patient" + this.index;
    database.ref(patientIndex).set({
        name:this.name,
        age:this.age,
        email:this.email,
        disease:this.disease
    })
}
}