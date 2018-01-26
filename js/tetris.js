function Point(x, y){
  this.x = x;
  this.y = y;
  this.type = "undefined";
}

Point.prototype.equals = function(point){
  return(point.x === this.x && point.y === this.y);
}

Point.prototype.toString = function(){
  return "(" + this.x + ", " + this.y + ")";
}

//Box Definition
function Box(startPoint, sideLength){
  this.startPoint = startPoint;
  this.sideLength = sideLength;
}

Box.prototype.contains = function(point){
  if (point.x >= this.startPoint.x && point.x <= this.startPoint.x + this.sideLength){
    if (point.y >= this.startPoint.y && point.y <= this.startPoint.y + this.sideLength){
      return true;
    }
  }
  return false;
}

//Tile Definition
function Tile(point){
  this.location = point;
  this.type = "empty";
}
//TileBlock definition
function TileBlock(){
  this.tiles = [];
}

TileBlock.prototype.addTile = function(tile){
  if(tile instanceof Tile){
    this.tiles.push(tile);
  } else if(tile instanceof point){
    this.tiles.push(new Tile(point));
  } else {
    throw "Can't add a tile that isn't a tile";
  }
  return this;
}

TileBlock.prototype.makeTile = function(x, y){
  this.tiles.push(new Tile(new Point(x, y)));
  return this;
}

TileBlock.prototype.overlaps = function(block){
  //Determines whether or not this TileBlock overlaps at least one
  //filled tile with another TileBlock
  for(var thisTilesIndex = 0; thisTilesIndex < this.tiles.length; thisTilesIndex++){
    for(var otherTilesIndex = 0; otherTilesIndex < block.tiles.length; otherTilesIndex++){
      var thisTile = this.tiles[thisTilesIndex];
      var otherTile = block.tiles[otherTilesIndex];
      console.log(thisTile.location + " === " + otherTile.location + ": " + thisTile.location.equals(otherTile.location));
      if(thisTile.location.equals(otherTile.location)){
        return true;
      }
    }
  }
  return false;
}

TileBlock.prototype.getBoundingBox = function(){
  // returns a box
  return new Box(new Point(0,0), new Point(0,0));
}

TileBlock.prototype.rotate = function(direction, iterations){
  //returns a copy of this rotated 90 degrees N times. N defaults to 1 if undefined.
}

function TileGrid(tilesx, tilesy){
  this.maxX = tilesx;
  this.minX = 0;
  this.maxY = tilesy;
  this.minY = 0;
  var pieces = [];
}

function GameBoard (tilesx, tilesy){
  this.board = new TileGrid(tilesx, tilesy);
}

function makeTile(x, y){
  return new Tile(new Point(x, y));
}

var myBlock = new TileBlock();
var otherBlock = new TileBlock();
