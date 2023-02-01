let obj={};

function groupObjectsBy(ary, property){
    for(let element of ary){
        let key =element[property];
        if(!(key in obj)){
            obj[key]=[];
            obj[key].push(element);
        }else{
            obj[key].push(element);
        }
    }

}


const ary=[ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];

console.log(obj);
groupObjectsBy(ary,"channel");
console.log(obj);
  