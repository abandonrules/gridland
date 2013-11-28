define(['app/entity/monster/monster', 'app/action/actionfactory', 'app/graphics/graphics'], 
		function(Monster, ActionFactory, Graphics) {
	
	var Skeleton = function(options) {
		this.options = $.extend({}, this.options, {}, options);
		this.hp(this.maxHealth());
	};
	Skeleton.prototype = new Monster({
		monsterClass: 'skeleton',
		arrowClass: 'arrow',
		speed: 50,
		arrowSpeed: 7
	});
	Skeleton.constructor = Skeleton;
	
	Skeleton.prototype.think = function() {
		var _this = this;
		require(['app/world'], function(World) {
			if(_this.isIdle() && _this.isAlive() && _this.action == null) {
				if(!_this.attackRange(World.dude)) {
					_this.action = ActionFactory.getAction("MoveTo", {
						target: World.dude
					});
				} else {
					_this.action = ActionFactory.getAction("Shoot", {
						target: World.dude
					});
				}
				if(_this.action != null) {
					_this.action.doAction(_this);
				}
			}
		});
	};
	
	Skeleton.prototype.attackRange = function(target) {
		// Skeletons are ranged
		return this.p() > 10 && this.p() < Graphics.worldWidth() - 10 && 
			Math.abs(this.p() - target.p()) <= 200;
	};
	
	Skeleton.prototype.maxHealth = function() {
		return 1;
	};
	
	Skeleton.prototype.getDamage = function() {
		return 2;
	};
	
	return Skeleton;
});