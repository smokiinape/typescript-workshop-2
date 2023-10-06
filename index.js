"use strict";
var Biltyper;
(function (Biltyper) {
    Biltyper[Biltyper["lastbil"] = 0] = "lastbil";
    Biltyper[Biltyper["personbil"] = 1] = "personbil";
    Biltyper[Biltyper["motorcykel"] = 2] = "motorcykel";
})(Biltyper || (Biltyper = {}));
class Bilhanterare {
    static printFordonInfo(Fordon) {
        console.log(`Bil: ${Fordon.type} ${Fordon.antalHjul} hjul`);
    }
}
class Motorcykelhanterare {
    static printFordonInfo(MotorFordon) {
        console.log(`Motorcykel: ${MotorFordon.type} ${MotorFordon.antalHjul} hjul ${MotorFordon.motortyp}`);
    }
}
class Lastbilhanterare {
    static printFordonInfo(MotorFordon) {
        console.log(`Lastbil: ${MotorFordon.type} ${MotorFordon.antalHjul} hjul ${MotorFordon.motortyp}`);
    }
}
const bil = {
    type: Biltyper.personbil,
    antalHjul: 4 
};
const motorcykel = {
    type: Biltyper.motorcykel,
    antalHjul: 2,
    motortyp: "Petrol Engine" 
};
const lastbil = {
    type: Biltyper.lastbil,
    antalHjul: 6,
    motortyp: "Diesel Engine"
};
Bilhanterare.printFordonInfo(bil);
Motorcykelhanterare.printFordonInfo(motorcykel);
Lastbilhanterare.printFordonInfo(lastbil);
