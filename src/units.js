// magic -> rare -> epic -> unique -> hell -> legend
var unitData = [
	//miscellaneous
	{
		name: "spider_mine",
		race: "terran_mech"
	},
	//terran bio
    {
        name: "marine",
		race: "terran_bio"
    },
    {
        name: "marauder",
		race: "terran_bio"
    },
    {
        name: "ghost",
		race: "terran_bio"
    },
    {
        name: "warmonger",
        tier: "magic",
		race: "terran_bio",
		ingredients: {
            marine: 2
        }
    },
    {
        name: "sniper",
		tier: "magic",
		race: "terran_bio",
        ingredients: {
            ghost: 2
        }
    },
    {
        name: "hammer_security",
		tier: "magic",
		race: "terran_bio",
        ingredients: {
            marauder: 1.5
        }
    },
    {
        name: "death_head",
		tier: "rare",
		race: "terran_bio",
        ingredients: {
            warmonger: 1,
            hammer_security: 1
        }
    },
    {
        name: "spectre",
		tier: "rare",
		race: "terran_bio",
        ingredients: {
            sniper: 1,
            hammer_security: 1
        }
    },
    {
        name: "jim_raynor",
		tier: "epic",
		race: "terran_bio",
        ingredients: {
            death_head: 1,
            spectre: 1
        }
    },
	//zerg
	{
		name: "hydralisk",
		race: "zerg"
	},
	{
		name: "roach",
		race: "zerg"
	},
	{
		name: "lurker",
		race: "zerg"
	},
	{
		name: "primal_hydralisk",
		tier: "magic",
		race: "zerg",
		ingredients: {
			hydralisk: 1.5
		}
	},
	{
		name: "primal_roach",
		tier: "magic",
		race: "zerg",
		ingredients: {
			roach: 2
		}
	},
	{
		name: "primal_lurker",
		tier: "magic",
		race: "zerg",
		ingredients: {
			lurker: 2
		}
	},
	{
		name: "brutalisk",
		tier: "rare",
		race: "zerg",
		ingredients: {
			primal_lurker: 1,
			primal_hydralisk: 1
		}
	},
	{
		name: "ravasaur",
		tier: "rare",
		race: "zerg",
		ingredients: {
			primal_roach: 1,
			primal_hydralisk: 1
		}
	},
	{
		name: "kerrigan",
		tier: "epic",
		race: "zerg",
		ingredients: {
			brutalisk: 1,
			ravasaur: 1
		}
	},
	//protoss bio
	{
		name: "zealot",
		race: "protoss_bio"
	},
	{
		name: "high_templar",
		race: "protoss_bio"
	},
	{
		name: "archon",
		race: "protoss_bio"
	},
	{
		name: "dark_zealot",
		tier: "magic",
		race: "protoss_bio",
		ingredients: {
			zealot: 2
		}
	},
	{
		name: "dark_high_templar",
		tier: "magic",
		race: "protoss_bio",
		ingredients: {
			high_templar: 2
		}
	},
	{
		name: "dark_archon",
		tier: "magic",
		race: "protoss_bio",
		ingredients: {
			archon: 1.5
		}
	},
	{
		name: "stone_zealot",
		tier: "rare",
		race: "protoss_bio",
		ingredients: {
			dark_archon: 1,
			dark_zealot: 1
		}
	},
	{
		name: "purifier_adept",
		tier: "rare",
		race: "protoss_bio",
		ingredients: {
			dark_archon: 1,
			dark_high_templar: 1
		}
	},
	{
		name: "zeratul",
		tier: "epic",
		race: "protoss_bio",
		ingredients: {
			purifier_adept: 1,
			stone_zealot: 1
		}
	},
	//terran mech
	{
		name: "vulture",
		race: "terran_mech"
	},
	{
		name: "goliath",
		race: "terran_mech"
	},
	{
		name: "siege_tank",
		race: "terran_mech"
	},
	{
		name: "diamondback",
		tier: "magic",
		race: "terran_mech",
		ingredients: {
			vulture: 2
		}
	},
	{
		name: "siege_breaker",
		tier: "magic",
		race: "terran_mech",
		ingredients: {
			siege_tank: 1.5
		}
	},
	{
		name: "spartan_company",
		tier: "magic",
		race: "terran_mech",
		ingredients: {
			goliath: 2
		}
	},
	{
		name: "blackhammer",
		tier: "rare",
		race: "terran_mech",
		ingredients: {
			siege_breaker: 1,
			spartan_company: 1
		}
	},
	{
		name: "ares",
		tier: "rare",
		race: "terran_mech",
		ingredients: {
			siege_breaker: 1,
			diamondback: 1
		}
	},
	{
		name: "arch_angel",
		tier: "epic",
		race: "terran_mech",
		ingredients: {
			ares: 1,
			blackhammer: 1
		}
	},
	//protoss mech
	{
		name: "sentry",
		race: "protoss_mech"
	},
	{
		name: "stalker",
		race: "protoss_mech"
	},
	{
		name: "immortal",
		race: "protoss_mech"
	},
	{
		name: "dark_sentry",
		tier: "magic",
		race: "protoss_mech",
		ingredients: {
			sentry: 2
		}
	},
	{
		name: "dark_stalker",
		tier: "magic",
		race: "protoss_mech",
		ingredients: {
			stalker: 2
		}
	},
	{
		name: "dark_immortal",
		tier: "magic",
		race: "protoss_mech",
		ingredients: {
			immortal: 1.5
		}
	},
	{
		name: "instigator",
		tier: "rare",
		race: "protoss_mech",
		ingredients: {
			dark_stalker: 1,
			dark_immortal: 1
		}
	},
	{
		name: "havoc",
		tier: "rare",
		race: "protoss_mech",
		ingredients: {
			dark_sentry: 1,
			dark_immortal: 1
		}
	},
	{
		name: "collosus",
		tier: "epic",
		race: "protoss_mech",
		ingredients: {
			instigator: 1,
			havoc: 1
		}
	},
	//unique
	{
		name: "alexi_stukov",
		tier: "unique",
		race: "terran_bio",
		ingredients: {
			jim_raynor: 1,
			kerrigan: 1
		}
	},
	{
		name: "hybrid_reaver",
		tier: "unique",
		race: "zerg",
		ingredients: {
			kerrigan: 1,
			zeratul: 1
		}
	},
	{
		name: "hybrid_dominator",
		tier: "unique",
		race: "protoss_bio",
		ingredients: {
			zeratul: 1,
			jim_raynor: 1
		}
	},
	{
		name: "odin",
		tier: "unique",
		race: "terran_mech",
		ingredients: {
			arch_angel: 2
		}
	},
	{
		name: "wrathwalker",
		tier: "unique",
		race: "protoss_mech",
		ingredients: {
			collosus: 2
		}
	},
	{
		name: "void_ray",
		tier: "unique",
		race: "protoss_mech",
		ingredients: {
			collosus: 1,
			arch_angel: 1
		}
	},
	//hell
	{
		name: "nova",
		tier: "hell",
		race: "terran_bio",
		ingredients: {
			alexi_stukov: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "vorazun",
		tier: "hell",
		race: "protoss_bio",
		ingredients: {
			hybrid_dominator: 2,
			hybrid_reaver: 1
		}
	},
	{
		name: "leviathan",
		tier: "hell",
		race: "zerg",
		ingredients: {
			hybrid_reaver: 2,
			alexi_stukov: 1
		}
	},
	{
		name: "void_seeker",
		tier: "hell",
		race: "protoss_mech",
		ingredients: {
			wrathwalker: 2,
			void_ray: 1
		}
	},
	{
		name: "hyperion",
		tier: "hell",
		race: "terran_mech",
		ingredients: {
			odin: 2,
			void_ray: 1
		}
	},
	//hidden
	{
		name: "warfield",
		tier: "hidden_",
		race: "terran_bio",
		ingredients: {
			alexi_stukov: 1,
			spectre: 4
		}
	},
	{
		name: "kraith",
		tier: "hidden_",
		race: "zerg",
		ingredients: {
			hybrid_reaver: 1,
			brutalisk: 4
		}
	},
	{
		name: "tassadar",
		tier: "hidden_",
		race: "protoss_bio",
		ingredients: {
			hybrid_dominator: 1,
			purifier_adept: 4
		}
	},
	{
		name: "science_vessel",
		tier: "hidden_",
		race: "terran_mech",
		ingredients: {
			odin: 1,
			ares: 4
		}
	},
	{
		name: "purifier_collosus",
		tier: "hidden_",
		race: "protoss_mech",
		ingredients: {
			wrathwalker: 1,
			instigator: 4
		}
	},
	//legendary
	{
		name: "commando_raynor",
		tier: "legendary",
		race: "terran_bio",
		ingredients: {
			nova: 1,
			warfield: 1
		}
	},
	{
		name: "k5_kerrigan",
		tier: "legendary",
		race: "zerg",
		ingredients: {
			leviathan: 1,
			kraith: 1
		}
	},
	{
		name: "artanis",
		tier: "legendary",
		race: "protoss_bio",
		ingredients: {
			vorazun: 1,
			tassadar: 1
		}
	},
	{
		name: "selendis",
		tier: "legendary",
		race: "protoss_mech",
		ingredients: {
			purifier_collosus: 1,
			void_seeker: 1
		}
	},
	{
		name: "gorgon_cruiser",
		tier: "legendary",
		race: "terran_mech",
		ingredients: {
			hyperion: 1,
			science_vessel: 1
		}
	},
	//hidden - Zerg
	{
		name: "swarm_host",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			lurker: 2
		}
	},
	{
		name: "queen",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			swarm_host: 2,
			ravasaur: 1
		}
	},
	{
		name: "brood_lord",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			queen: 2,
			kraith: 1
		}
	},
	{
		name: "drone",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			primal_roach: 1/3,
			primal_hydralisk: 2/3
		}
	},
	{
		name: "spore_cannon",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			drone: 12
		}
	},
	{
		name: "vile_roach",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			primal_roach: 3,
			dark_stalker: 2
		}
	},
	{
		name: "omegalisk",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			hybrid_reaver: 2,
			kerrigan: 3
		}
	},
	{
		name: "torrasque",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			omegalisk: 1,
			vile_roach: 2
		}
	},
	{
		name: "xelnaga_kerrigan",
		tier: "hidden",
		race: "zerg",
		ingredients: {
			k5_kerrigan: 1,
			torrasque: 1,
			raven: 2
		}
	},
	//hidden - Terran Bio
	{
		name: "tauren_space_marine",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			warmonger: 2
		}
	},
	{
		name: "gabriel_tosh",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			spectre: 2,
			hammer_security: 3
		}
	},
	{
		name: "dominion_marauder",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			tauren_space_marine: 2,
			hammer_security: 3
		}
	},
	{
		name: "tauren_toilet",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			tauren_space_marine: 2,
			annihilator: 1
		}
	},
	{
		name: "murloc_marine",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			death_head: 3,
			ravasaur: 2
		}
	},
	{
		name: "stetmann",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			murloc_marine: 1,
			tauren_toilet: 1
		}
	},
	{
		name: "swann",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			dominion_marauder: 2
		}
	},
	{
		name: "tychus_findlay",
		tier: "hidden",
		race: "terran_bio",
		ingredients: {
			swann: 1,
			stetmann: 1
		}
	},
	//hidden - Terran Mech
	{
		name: "widow_mine",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			spider_mine: 12
		}
	},
	{
		name: "warhound",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			spartan_company: 2
		}
	},
	{
		name: "laser_drill",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			siege_breaker: 3,
			ares: 2
		}
	},
	{
		name: "garbage",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			dark_zealot: 2,
			diamondback: 3
		}
	},
	{
		name: "nuke_silo",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			tauren_toilet: 1,
			garbage: 2,
			crimson_archon: 1
		}
	},
	{
		name: "arch_fighter",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			arch_angel: 4
		}
	},
	{
		name: "pirate_capital_ship",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			arch_fighter: 2,
			hyperion: 1
		}
	},
	{
		name: "raven",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			widow_mine: 2,
			warhound: 3,
			garbage: 1
		}
	},
	{
		name: "hercules_bomber",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			raven: 1,
			science_vessel: 1
		}
	},
	{
		name: "terra-tron",
		race: "terran_mech",
		tier: "hidden",
		ingredients: {
			gorgon_cruiser: 1,
			pirate_capital_ship: 1,
			swann: 2
		}
	},
	//hidden - Protoss Bio
	{
		name: "crimson_archon",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			dark_archon: 4
		}
	},
	{
		name: "lasarra",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			crimson_archon: 1,
			stone_zealot: 3
		}
	},
	{
		name: "dark_templar",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			dark_high_templar: 1,
			dark_zealot: 1
		}
	},
	{
		name: "sentinel",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			dark_templar: 2
		}
	},
	{
		name: "centurion",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			dark_templar: 2
		}
	},
	{
		name: "blood_hunter",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			centurion: 2,
			purifier_adept: 2
		}
	},
	{
		name: "ascendant",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			sentinel: 2,
			stone_zealot: 2
		}
	},
	{
		name: "karax",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			ascendant: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "alarak",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			blood_hunter: 2,
			hybrid_dominator: 1
		}
	},
	{
		name: "talandar",
		tier: "hidden",
		race: "protoss_bio",
		ingredients: {
			karax: 1,
			alarak: 1
		}
	},
	//hidden - Protoss Mech
	{
		name: "energizer",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			dark_sentry: 2
		}
	},
	{
		name: "annihilator",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			dark_immortal: 4
		}
	},
	{
		name: "warp_prism",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			energizer: 1,
			annihilator: 1
		}
	},
	{
		name: "mothership_core",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			warp_prism: 1,
			void_ray: 1
		}
	},
	{
		name: "tempest",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			havoc: 2,
			dark_immortal: 3
		}
	},
	{
		name: "purifier_mothership",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			wrathwalker: 2,
			mothership_core: 1
		}
	},
	{
		name: "taldarim_tempest",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			tempest: 2,
			crimson_archon: 2
		}
	},
	{
		name: "taldarim_mothership",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			purifier_mothership: 1,
			taldarim_tempest: 1
		}
	},
	{
		name: "mohandar",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			purifier_collosus: 1,
			void_ray: 4
		}
	},
	{
		name: "spear_of_adun",
		tier: "hidden",
		race: "protoss_mech",
		ingredients: {
			selendis: 1,
			taldarim_mothership: 1,
			karax: 2
		}
	},
	//hidden - Hybrid
	{
		name: "hybrid_nemesis",
		tier: "hidden",
		race: "protoss_bio/zerg hybrid",
		ingredients: {
			brood_lord: 1,
			tassadar: 2
		}
	},
	{
		name: "sarah_kerrigan",
		tier: "hidden",
		race: "terran_bio/zerg hybrid",
		ingredients: {
			nova: 1,
			k5_kerrigan: 1
		}
	},
	{
		name: "hybrid_behemoth",
		tier: "hidden",
		race: "protoss_bio/terran_bio hybrid",
		ingredients: {
			alarak: 1,
			warfield: 2
		}
	},
	{
		name: "hybrid_destroyer",
		tier: "hidden",
		race: "terran_mech/protoss_mech hybrid",
		ingredients: {
			hercules_bomber: 1,
			mohandar: 1
		}
	}
];