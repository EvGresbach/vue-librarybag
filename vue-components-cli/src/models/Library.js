import {LibraryItem} from "@/models/LibraryItems";

function LibraryCollection() {
    let arr = [];

    arr.addItem = function (item) {
        this.push(new LibraryItem(
            item,
            ((collection) => function () {
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this)
        ));

        // allows us to chain methods
        return this;
    }

    arr.checkedOutItems = function () {
        return this.filter(function (item) {
            return !item.isAvailable();
        })
    }

    arr.removeItem = function (item) {
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}

export default LibraryCollection;