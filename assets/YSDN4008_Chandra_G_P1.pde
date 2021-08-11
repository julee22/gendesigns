//Genice Chandra YSDN 4008 Project 1

/* @pjs preload="legend-03.svg","201303rawData01.csv","201303rawData02.csv"; */


PShape morn, noon, night, dawn, empty;
PShape buddy, drawType;

PShape bg;

int centerX=0, centerY=0, offsetX = 0, offsetY=0;


Table dataFirst;
Table dataSec;
int rowCount;

int r;
float theta;
float origX, origY;


int dayRad;

int callRad = 50;
int calls;

int rowStart = 0, rowCurr;

float spinCount = 0;


public void setup() {
  size(1000,700);
  background(0);
  
  //create Call Time Shapes
  morn = createShape(
    ARC,0,0,callRad,callRad, 0, TWO_PI);
  morn.setStroke(255);
  morn.setFill(false);
  
  noon = createShape (
    ARC, 0,0,callRad,callRad,PI,TWO_PI);
  noon.setStroke(255);
  noon.setFill(false);
  
  night = createShape (
    ARC, 0,0,callRad,callRad,0,TWO_PI);
  night.setStroke(255);
  night.setFill(false);
  
  dawn = createShape (
    ARC, 0,0,callRad,callRad,HALF_PI+QUARTER_PI,TWO_PI+QUARTER_PI, OPEN);
  dawn.setStroke(255);
  dawn.setFill(false);
  
  empty = createShape(ELLIPSE, 0,0, callRad,callRad);
  empty.setStroke(false);
  empty.setFill(0);
  
  //Buddy & Call Type Circles
  buddy = createShape(ELLIPSE, 0,0,5,5);
  buddy.setFill(color(random(255)));
  buddy.setFill(205);
  
  drawType = createShape(ELLIPSE, 0,0,10,10);
  drawType.setStroke(false);
  buddy.setFill(color(255));
  
  centerX = 0;
  centerY = 0;
    
  smooth(10);
  ellipseMode(CENTER);
    
  bg = loadShape("legend-03.svg");

  dataFirst = loadTable("201303rawData01.csv","header"); //Header skips first row
  dataSec = loadTable("201303rawData02.csv","header");
  
  frameRate(24);
}

void draw() {
  background(0);
  shape(bg,0,0);
  
  if (centerX>0) {  //ensure can't scroll too far left
    centerX = 0;
  }
  
  if (mousePressed == false) { // auto scroll navigation
    offsetX ++;
  } else if (mouseButton == RIGHT) {
    centerX = 0;
  } else if (mouseButton == LEFT) {
    offsetX -=5;
  }
  
  translate(centerX-offsetX, centerY-15);
  
  calls = 1;
  translate(25,height/2);
  
  createVis(dataFirst);
  createVis(dataSec);
  
   
  spinCount+=0.01;
}

void createVis(Table data) {
  rowCount = data.getRowCount();
  for (int n = 0; n < rowCount; n++) { //iterate through table
    rowCurr = n; //set current row
    
    if (n==rowCount-1) {
            
      drawDay(calls, rowStart, data);
      rowStart = 0; 
      break;
      
    } else if (n!=0 && newDay(data.getInt(n,"day"), data.getInt(n+1,"day"))) { //if a new date has been detected
      drawDay(calls, rowStart, data); //draw day circle with calls counter and give starting row.
      calls = 1; //reset calls counter
      rowStart = n+1; //reset rowStart to current Row
      
    } else {
      calls++; // if the date is the same, add to calls counter
    }
  }
}


boolean newDay(int curr, int next) {
  if (curr != next) {
    return true;
  } else {
    return false;
  }
};

void drawDay(int numOfCalls, int index, Table data) {
  String time;
  
  //calculate diameter of day Circle
  dayRad = callRad + (callRad/2 * numOfCalls);
  
  //init r
  r = dayRad/2;
    
  translate(r,0); //move origin point to middle of current circle  
  
  pushMatrix();
  
  writeDate(index, data);
  
  strokeWeight(2);
  stroke(255);
  ellipse(0, 0, dayRad, dayRad);
  
  
  spin(spinCount,index);
  
  
  for(int i = 0; i< numOfCalls; i++) { // create drawcall numOfCalls times      
    
    pushMatrix();
    
    theta = i*(2*PI/calls);  //calculate polar coordinates based on 360/numOfCalls
    
    origX = r* cos(theta);
    origY = r* sin(theta);
    translate(origX,origY);  //move origin point
    
    time = data.getString(index,"callTime"); //set time as callTime using index
    
    drawCall(index,getTime(time), data);    //drawCall using time
    
    index+=1;
    popMatrix();
  }
  
  popMatrix();
  
  translate(r+75,0); //move origin point past previous circle
  
};



void drawCall(int index, String time, Table data) {
  float call_Y = 0;
  
  
  pushMatrix();
  rotate(theta-HALF_PI);
  switch(time) {
  case "morn":
    call_Y -= callRad-13;
    translate(0, call_Y);
    shape(morn,0,0);
    break;
  case "noon":
    call_Y -= 4;
    translate(0, call_Y);
    shape(empty,0,0);
    shape(noon,0,0);
    break;
  case "night":
    shape(night,0,0);
    break;
  case "dawn":
    call_Y -= callRad/3 + 2;
    translate(0, call_Y);
    shape(empty,0,0);
    shape(dawn,0,0);
    break;
  }
  
  drawType(index, 0, data);
  
  popMatrix();

}

void drawType(int index, float call_Y, Table data) {
  String callType, rate;
  float inOrOut = callRad/2;
  
  callType = data.getString(index,"callType");
  rate = data.getString(index,"dayNightWeekend");
  
  // Determine distance of callType
  switch(callType) {
    case "OUT":
    case "MYO":
      call_Y -= inOrOut;
      break;
    case "MYI":
    default:
      call_Y -= (inOrOut/2);
      break;
  }
  
  translate(0,call_Y);  // move origin point for callType
  
  if(callType.equals("MYO") || callType.equals("MYI")) {  //determine if there's a buddy
      drawBuddy();
  }
  
  
  int r = int(inOrOut);
  int dur = data.getInt(index,"duration");
  float i, x=0, y=r;
  
  i = spinCount*dur;    //make spin speed reflect duration
  
  theta = i*(2*PI/calls);  //calculate polar coordinates based on 360/numOfCalls
    
  x = r* cos(theta);    //create x & y points on polar coordinate
  y = r* sin(theta);
  
  //rate line  
  switch(rate) {
  case "WD":
    line(0, 0, x, y);
    break;
  case "NW": 
    line(-2,  0, x-2, y);
    line(2,  0, x+2, y);
    break;
  }
  
  shape(drawType,0,0);
 
}


void drawBuddy(){
  int r = 10;
  float x=0, y=r;
  float i = -spinCount;
  
  theta = i*(2*PI/calls);  //calculate polar coordinates based on 360/numOfCalls
    
  x = r* cos(theta);
  y = r* sin(theta);
  
  shape(buddy,x,y);
}


void writeDate(int index, Table data) {
  int date = data.getInt(index,"day");
  String month = data.getString(index,"month");
  month = month.toUpperCase();
  fill(255);
  textAlign(CENTER);
  text(month, 0,-15);
  text(date,0,0);
  noFill();
}

String getTime(String callTime) {
  int timeHours;
  String callTimeCheck = callTime.substring(1,2); //gives us second character
  if (callTimeCheck.equals(":")) {
      timeHours = int(callTime.substring(0,1));
    } else {
      timeHours = int(callTime.substring(0,2));
    }
  if (timeHours>=0 && timeHours<6) {
    return "dawn";
  } else if (timeHours>=6 && timeHours<12) {
    return "morn";
  } else if (timeHours>=12 && timeHours<18) {
    return "noon";
  } else {
    return "night";
  }

};


void spin(float degree, int index) {
  if (index % 2 ==0){
    rotate(degree);
  } else {
    rotate(-degree);
  }
};
