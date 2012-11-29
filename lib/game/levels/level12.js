ig.module( 'game.levels.level12' )
.requires( 'impact.image','game.entities.respawnpoint','game.entities.player','game.entities.trigger','game.entities.levelchange','game.entities.battery','game.entities.void','game.entities.displaymessage','game.entities.frosk' )
.defines(function(){
LevelLevel12=/*JSON[*/{"entities":[{"type":"EntityRespawnpoint","x":44,"y":35},{"type":"EntityPlayer","x":20,"y":28},{"type":"EntityTrigger","x":-16,"y":164,"settings":{"target":{"1":"nextLevel4"},"size":{"x":36,"y":60}}},{"type":"EntityLevelchange","x":24,"y":156,"settings":{"name":"nextLevel4","level":"Level13"}},{"type":"EntityBattery","x":224,"y":64},{"type":"EntityVoid","x":240,"y":36,"settings":{"name":"levelInfo","levelNumber":2,"title":"tutorial2"}},{"type":"EntityDisplaymessage","x":172,"y":48,"settings":{"name":"displayMessage","message":"Batteries power your laser. Press SPACE to shoot!"}},{"type":"EntityTrigger","x":216,"y":68,"settings":{"size":{"x":12,"y":12},"target":{"1":"displayMessage"}}},{"type":"EntityFrosk","x":324,"y":144}],"layer":[{"name":"background","width":12,"height":7,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/300_tiles1.png","repeat":true,"preRender":true,"distance":"2","tilesize":32,"foreground":false,"data":[[131,131,131,131,131,131,131,131,131,131,131,131],[141,141,141,141,141,141,141,141,141,141,141,141],[141,141,141,141,141,141,141,141,141,141,141,141],[141,141,141,141,141,141,141,141,141,141,141,141],[141,141,141,141,141,141,141,141,141,141,141,141],[141,141,141,141,141,141,141,141,141,141,141,141],[141,141,141,141,141,141,141,141,141,141,141,141]]},{"name":"main","width":24,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[222,222,222,222,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"bridges","width":24,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/300_tiles1.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":true,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,355,356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,337,338,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,355,356,0,0,0,0,357,358,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"foreground","width":24,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles/tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":true,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,203,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,201,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,223,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[179,199,179,179,179,181,0,0,0,0,0,217,218,219,220,223,224,0,0,0,0,0,0,0],[199,180,199,199,180,181,0,0,0,0,0,64,159,160,159,160,122,0,0,0,0,0,0,0],[159,159,159,159,159,122,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,205,206,0,0,0,0,0,0,217,219,219,219,219,219,219,219,219,219,219,219,219,224],[0,0,201,202,0,0,0,0,0,0,197,179,179,179,179,179,179,179,179,179,179,179,179,200],[77,131,217,218,219,220,221,222,223,224,64,160,160,160,160,160,160,160,160,160,160,160,160,122],[77,0,64,160,160,160,160,160,160,122,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":24,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":true,"data":[[34,23,23,23,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelLevel12Resources=[new ig.Image('media/tiles/300_tiles1.png'), new ig.Image('media/tiles/tiles.png'), new ig.Image('media/tiles/300_tiles1.png'), new ig.Image('media/tiles/tiles.png')];
});