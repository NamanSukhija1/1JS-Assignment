let packagetype="overnight";
let deliverytime="";
switch(packagetype){
    case"standard":
    deliverytime=" 3-5 days ";
    break;
    case"express":
    deliverytime="1-2 days";
    break;
    case"overnight":
    deliverytime="next day";
    break;
    default:
        deliverytime="unknown"
        break; }
console.log("The estimated delivery time for"+ packagetype+ deliverytime);













