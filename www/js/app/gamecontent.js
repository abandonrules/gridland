define({
	
	ResourceType: {
		Grain: {
			className: 'grain',
			nightEffect: {
				'house': 'spawn:hauntedArmour',
				'default': 'spawn:zombie'
			},
			multipliers: {
				house: 2,
				fort: 3
			}
		},
		Wood: {
			className: 'wood',
			nightEffect: {
				'sawmill2': 'shield:3',
				'sawmill': 'shield:2',
				'default': 'shield:1'				
			},
			multipliers: {
				sawmill: 2,
				sawmill2: 3
			}
		},
		Stone: {
			className: 'stone',
			nightEffect: {
				'blacksmith5': 'sword:6',
				'blacksmith4': 'sword:5',
				'blacksmith3': 'sword:4',
				'blacksmith2': 'sword:3',
				'blacksmith': 'sword:2',
				'default': 'sword:1'
			},
			multipliers: {
				blacksmith: 2,
				blacksmith2: 3,
				blacksmith3: 4,
				blacksmith4: 5,
				blacksmith5: 6
			}
		},
		Clay: {
			className: 'clay',
			nightEffect: {
				'bricklayer2': 'spawn:spider',
				'default': 'spawn:rat'
			},
			multipliers: {
				bricklayer: 2,
				bricklayer2: 3
			}
		},
		Cloth: {
			className: 'cloth',
			nightEffect: {
				'weaver2': 'spawn:lizardman',
				'default': 'spawn:skeleton'
			},
			mulitpliers: {
				weaver: 2,
				weaver2: 3
			}
		}
	},
	
	getResourceType: function(className) {
		for(var c in this.ResourceType) {
			if(className == this.ResourceType[c].className) {
				return this.ResourceType[c];
			}
		}
		return null;
	},
	
	BuildingCallbacks: {
		'shack': function() {
			require(['app/resources', 'app/world'], function(R, W) {
				R.init();
				W.launchCelestial();
			});
		},
		
		'house': function() {
			require(['app/resources', 'app/world'], function(R, W) {
				if(!R.loaded) {
					R.init();
					W.launchCelestial();
				}
				R.setSize(4, 3);
			});
		},
		
		'fort': function() {
			require(['app/resources', 'app/world'], function(R, W) {
				if(!R.loaded) {
					R.init();
					W.launchCelestial();
				}
				R.setSize(4, 4);
			});
		},
		
		'castle': function() {
			require(['app/resources', 'app/world'], function(R, W) {
				if(!R.loaded) {
					R.init();
					W.launchCelestial();
				}
				R.setSize(5, 4);
			});
		}
	},
	
	BuildingType: {
		Shack: {
			className: 'shack',
			position: 30,
			cost: {},
			requiredLevel: 1,
			animationFrames: 4,
			priority: 1
		},
		
		House: {
			className: 'house',
			position: 30,
			cost: {},
			requiredLevel: 4,
			animationFrames: 4,
			tileMod: 'grain',
			tileLevel: 2,
			replaces: 'shack',
			defaultAnimation: 1,
			priority: 1
		},
		
		Fort: {
			className: 'fort',
			position: 30,
			cost: {},
			requiredLevel: 7,
			animationFrames: 4,
			tileMod: 'grain',
			tileLevel: 3,
			replaces: 'house',
			defaultAnimation: 2,
			priority: 1
		},
		
		Castle: {
			className: 'castle',
			position: 30,
			cost: {},
			requiredLevel: 10,
			animationFrames: 4,
			tileMod: 'grain',
			tileLevel: 4,
			replaces: 'fort',
			defaultAnimation: 3,
			priority: 1
		},
		
		BrickLayer: {
			className: 'bricklayer',
			position: 90,
			cost: {
				stone: 5,
				wood: 5
			},
			requiredLevel: 1,
			priority: 1
		},
		
		Bricklayer2: {
			className: 'bricklayer2',
			position: 90,
			cost: {
				stone: 1,
				wood: 1,
				cloth: 1,
				clay: 5
			},
			requiredLevel: 1,
			tileMod: 'clay',
			tileLevel: 2,
			replaces: 'bricklayer',
			defaultAnimation: 1,
			priority: 4
		},
		
		Weaver: {
			className: 'weaver',
			position: 150,
			cost: { 
				stone: 4,
				wood: 4,
				clay: 2
			},
			requiredLevel: 1,
			priority: 2
		},
		
		Weaver2: {
			className: 'weaver2',
			position: 150,
			cost: {
				wood: 1,
				stone: 1,
				clay: 1,
				cloth: 5
			},
			requiredLevel: 1,
			tileMod: 'cloth',
			tileLevel: 2,
			replaces: 'weaver',
			defaultAnimation: 1,
			priority: 4
		},
		
		Blacksmith: {
			className: 'blacksmith',
			position: 210,
			cost: {
				stone: 2,
				clay: 2,
				cloth: 2
			},
			requiredLevel: 1,
			tileMod: 'stone',
			tileLevel: 2,
			priority: 3
		},
		
		Blacksmith2: {
			className: 'blacksmith2',
			position: 210,
			cost: {
				stone: 4,
				clay: 2,
				cloth: 2
			},
			requiredLevel: 1,
			tileMod: 'stone',
			tileLevel: 3,
			replaces: 'blacksmith',
			defaultAnimation: 1,
			priority: 4
		},
		
		Blacksmith3: {
			className: 'blacksmith3',
			position: 210,
			cost: {
				stone: 6,
				clay: 3,
				cloth: 3
			},
			requiredLevel: 1,
			tileMod: 'stone',
			tileLevel: 4,
			replaces: 'blacksmith2',
			defaultAnimation: 2,
			priority: 5
		},
		
		Blacksmith4: {
			className: 'blacksmith4',
			position: 210,
			cost: {
				stone: 8,
				clay: 4,
				cloth: 4
			},
			requiredLevel: 1,
			tileMod: 'stone',
			tileLevel: 5,
			replaces: 'blacksmith3',
			defaultAnimation: 3,
			priority: 6
		},
		
		Blacksmith5: {
			className: 'blacksmith5',
			position: 210,
			cost: {
				stone: 10,
				clay: 5,
				cloth: 5
			},
			requiredLevel: 1,
			tileMod: 'stone',
			tileLevel: 6,
			replaces: 'blacksmith4',
			defaultAnimation: 4,
			priority: 7
		},
		
		Sawmill: {
			className: 'sawmill',
			position: 270,
			cost: {
				wood: 2,
				clay: 2,
				cloth: 2
			},
			requiredLevel: 1,
			tileMod: 'wood',
			tileLevel: 2,
			priority: 3
		},
		
		Sawmill2: {
			className: 'sawmill2',
			position: 270,
			cost: {
				wood: 4,
				clay: 2,
				cloth: 2
			},
			requiredLevel: 1,
			tileMod: 'wood',
			tileLevel: 3,
			replaces: 'sawmill',
			defaultAnimation: 1,
			priority: 4
		}
	},
	
	getBuildingType: function(className) {
		for(var c in this.BuildingType) {
			if(className == this.BuildingType[c].className) {
				return this.BuildingType[c];
			}
		}
		return null;
	}
});
