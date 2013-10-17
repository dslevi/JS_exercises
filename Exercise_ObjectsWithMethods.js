var LuluKitty = {
    tiredness: 50,
    hunger: 90,
    loneliness: 100,
    happiness: 30,
    feed : function() {
        var calories = getRandomInt(0, 25);
        this.hunger -= calories;
    },
    sleep : function(hours) {
        this.tiredness -= hours;
    },
    pet : function(qualityTime) {
        var needsPetting = getRandomInt(0,2);
        if (needsPetting) {
            this.loneliness -= qualityTime;
            console.log("Petted!")
        } else {
            console.log("Hiss! Go away!!")
        }
    },
    play: function(playTime) {
        this.happiness += playTime; 
    },
    status: function() {
        console.log("Tiredness: " + this.tiredness);
        console.log("Hunger: " + this.hunger);
        console.log("Loneliness: " + this.loneliness);
        console.log("Happiness: " + this.happiness);
    }
}

LuluKitty.status();
LuluKitty.feed();
LuluKitty.sleep(49);
LuluKitty.pet(12);
LuluKitty.play(8);
LuluKitty.status();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
