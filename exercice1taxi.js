//Contexte
console.log("John est immortel. Mais ce soir, il est très aigri. Il prend un taxi pour rentrer.");
console.log("Sa seule faiblesse : la musique de Wejdene 'Anissa'.");
console.log("Il fallait que tous les chauffeurs de taxi aient mauvais goûts.");
console.log("Il doit maintenant survivre 30 feux rouges sans perdre la totalité de ses neurones");

//Classe de John
class HaterDewejdene {
  constructor(name, pv) {
    this.name = name;
    this.pv = pv;
  }
  
  //Fonction
  BadSong(musiqueJouée) {
    if (musiqueJouée === "Anissa") { 
      const dégâts = 1; // 1 pv en moins à chaque Anissa
      this.pv -= dégâts; 
      
      console.log("EMOTIONAL DAMAGE");
      console.log(this.name + " se fait agresser par 'Anissa' et perd 1 point de santé mentale ");
      console.log(this.name + " défonse la porte et change de taxi." + " IL a " + this.pv + " Points de santé mentale restants.");
    }

    else {
      console.log(this.name + " a évité les dégâts mentaux.");
    }
  }
}

// Objet John
const John = new HaterDewejdene("John", 10);

const radioDangereuse = ["Time Time", "Je suis un sniper", "Anissa", "MAMBO NO. 5", "Theme de Nyan Cat"]; 


//Boucle
let i = 0;
while (John.pv > 0 && i < 30) {
  const musiqueJouée = radioDangereuse[Math.floor(Math.random() * radioDangereuse.length)];
  i++;
  console.log("Feu rouge n°" + i + " : la musique jouée est '" + musiqueJouée + "'");

  John.BadSong(musiqueJouée);
}

if (John.pv === 0) {
  console.log("John utilise 'Destruction'. John a rage quit la Planète. Wejdene a mis un soldat à terre.");
} else {
  console.log("John le Gigachad🗿 a survécu");
}