let typeOfPackage="overnight";

switch(typeOfPackage){
    case "standard":
        console.log("your package will delivered in  next 3-5 days");  
        break;

    case "express":
        console.log("your package will delivered in  next 1-2 days ");
        break;
    case "overnight":
        console.log("your package will delivered by tommorow");
        break;
    default:
       console.log("Invalid package type!!")

}