enum Biltyper {
    lastbil,
    personbil,
    motorcykel
}

interface Fordon {
    type: Biltyper;
    antalHjul: number;
}

interface MotorFordon extends Fordon {
    motortyp: string;
}

class Bilhanterare {
    static printFordonInfo(Fordon: Fordon): void {
        console.log(`Bil: ${Fordon.type} ${Fordon.antalHjul} hjul`);
    }
}

class Motorcykelhanterare {
    static printFordonInfo(MotorFordon: MotorFordon): void {
        console.log(`Motorcykel: ${MotorFordon.type} ${MotorFordon.antalHjul} hjul ${MotorFordon.motortyp}`);
    }
}

class Lastbilhanterare {
    static printFordonInfo(MotorFordon: MotorFordon): void {
        console.log(`Lastbil: ${MotorFordon.type} ${MotorFordon.antalHjul} hjul ${MotorFordon.motortyp}`);
    }
}

const bil: Fordon = {
    type: Biltyper.personbil,
    antalHjul: 4 
};

const motorcykel: MotorFordon = {
    type: Biltyper.motorcykel,
    antalHjul: 2,
    motortyp: "Petrol Engine" 
};

const lastbil: MotorFordon = {
    type: Biltyper.lastbil,
    antalHjul: 6,
    motortyp: "Diesel Engine"
};

Bilhanterare.printFordonInfo(bil);
Motorcykelhanterare.printFordonInfo(motorcykel);
Lastbilhanterare.printFordonInfo(lastbil);
