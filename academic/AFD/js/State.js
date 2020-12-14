function State(name){
    this.name = name;
    this.children = [];
    this.parent = []
};

State.prototype.SetName = function(name){
    this.name = name;
}

State.prototype.GetName = function(){
    return this.name;
}

State.prototype.SetChildren = function(children){
    this.children = children;
}

State.prototype.GetChildren = function(){
    return this.children;
}

State.prototype.SetParent = function(parent){
    this.parent = parent;
}

State.prototype.GetParent= function(){
    return this.parent;
}