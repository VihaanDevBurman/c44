var pd,database,patient,patientCount=0;
function setup() {
  createCanvas(windowWidth-30,windowHeight-30);
  database=firebase.database();
  pd=new PersonalDetails();
}

function draw() {
  background(255,255,255);  
 
  pd.display();
}