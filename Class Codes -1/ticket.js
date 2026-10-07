let Age=prompt('Enter the age:');
if(Age<5){
    console.log('Free Ticket');
}
else if(Age<12){
    console.log('Ticket Fare: 100 Rs')
}
else if(Age<60){
    console.log('Ticket Fare: 250 Rs')
}
else{
    console.log('Ticket Fare: 150 Rs')
}