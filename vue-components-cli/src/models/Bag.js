import BagItem from "@/models/BagItem";

function Bag(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new BagItem(
            item,
            ((collection) => function(){
            collection.removeItem(this)
        })(this)),
        );

        return this;
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }
    return arr;
}

export default Bag;