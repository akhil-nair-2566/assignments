function metadataParser(version,channel,keyField){
    
    this._version=version;
    this._channel=channel;
    this._keyField=keyField;
    
    this.getVersion=function(){
        return this._version;
    };
    this.getChannel=function(){
        return this._channel;
    }
    this.setVersion=function(version){
        this._version=version;
    }
    this.setChannel=function(channel){
        this._channel=channel;
    }
    this.setKeyField=function(keyField){
        this._keyField=keyField;
    }
    this.getKeyField = function(ary){
        return ary.map((x)=>x.keyField);
    }

    
};

let one = new metadataParser(1,1,"A");
console.log(one);
one.setChannel(19);
console.log(one);
console.log(one.getChannel());
console.log(one.getKeyField([{keyField:"X",channel:1},{keyField:"Y"},{keyField:"Z"}]));