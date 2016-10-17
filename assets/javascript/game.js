console.log("javascript included");

	var fighter = {
		name: "",
		maxHP: 100,
		currentHP: 100,
		attackBase: 1,
		attackCounter: 1,
		attackMultiplier: 1,
		alive: true,
		initialize: function (newName, newHP, newAttack, newCounter) {
			this.name = newName;
			this.maxHP = newHP;
			this.currentHP = newHP;
			this.attackBase = newAttack;
			this.attackCounter = newCounter;
			this.attackMultiplier = 1;
			this.alive = true;

			console.log("fighter " + this.name + " intialized");
		},

		fight: function(enemy) {
			enemy.receiveDmg(this.attack());
			this.receiveDmg(enemy.counter());
		},

		attack: function() {
			var dmg= (Math.floor(Math.random()*this.attackBase) * this.attackMultiplier);
			console.log(this.name + " attacks for " + dmg);
			this.output(this.name + " attacks for " + dmg);

			
			this.increaseAtk();
			return dmg;
		},

		increaseAtk: function () {
			this.attackMultiplier++;
		},

		counter: function() {

			if (this.isAlive() == true) { //dead guys can't counter

				var dmg = (Math.floor(Math.random()*this.attackCounter) );
				console.log(this.name + " counters for " + dmg);
				this.output(this.name + " counters for " + dmg);

				return dmg;
			}
			else {
				return 0;
			}
		},

		receiveDmg: function(dmg) {
			console.log(this.name + " receives " + dmg);
			this.currentHP = this.currentHP - dmg;
			this.checkAlive(); 
		},

		checkAlive: function() {
			if (this.currentHP <= 0) {
				this.alive = false;
				this.attackBase = 0;
				this.attackCounter = 0;
				console.log(this.name + " is dead");
				this.output(this.name + " is dead");
			}
		},

		isAlive: function() {
			if (this.currentHP <= 0) {
				return false;
			}
			else {
				return true;
			}
		},

		output: function(msg) {
			var newDiv = $('<div>');
			newDiv.html(msg);
			$('#outputLog').append(newDiv); //not sure if scoping here is appropriate. lacks encapsulation.

		}

	}
