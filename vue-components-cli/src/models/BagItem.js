function BagItem(media, removeFunction){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

    media.remove = removeFunction || function(){};

    return media;
}

// export multiple classes/functions/objects/etc
export default BagItem;