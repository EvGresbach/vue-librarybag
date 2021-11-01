const MILLI_TO_MIN = 60000;

function LibraryItem(media, removeFunction){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}
    media.qty = Math.floor(Math.random() * 10 ) + 1; //qty between 1 and 10

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        media.addQty();
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        if(media.qty > 0){
            media.subQty();
            if(media.qty === 0)
                this.status = STATUSES.CHECKED_OUT;
            else
                this.status = STATUSES.CHECKED_IN;
        }
    }

    //make sure that we are editing qty properly and to see log
    media.addQty = function(){
        media.qty++;
        console.log(media.qty)
    }
    media.subQty = function(){
        media.qty--;
        console.log(media.qty)
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }
    //media.remove = removeFunction || (() => {});
    //                             || in case a function wasn't provided
    media.remove = removeFunction || function(){};

    return media;
}

function Book(trackName, artistName, trackId){
    this.artistName = artistName; //author
    this.trackName = trackName; //title
    this.trackId = trackId;
}

// same as above using class syntax
function Movie(trackName, trackTimeMillis, trackId){
    this.trackTimeMillis = trackTimeMillis/MILLI_TO_MIN;
    this.trackName = trackName;
    this.trackId = trackId;
}

function Album(collectionName, artistName, trackCount, collectionId){
    this.collectionName = collectionName;
    this.artistName = artistName;
    this.trackCount = trackCount;
    this.collectionId = collectionId;
}

function Song(trackName, trackId, artistName, collectionName, ){
    this.trackName = trackName;
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.trackId = trackId;
}

function Podcast(trackId, trackName, artistName, collectionName){
    this.trackName = trackName;
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.trackId = trackId;
}

function MusicVideo(trackName,artistName, collectionName, trackId){
    this.trackName = trackName;
    this.artistName = artistName;
    this.collectionName = collectionName;
    this.trackId = trackId;
}

function Audiobook(collectionName, artistName, trackId){
    this.artistName = artistName; //author
    this.collectionName = collectionName; //title
    this.trackId = trackId;
}

function ShortFilm(trackName, trackTimeMillis, trackId){
    this.trackTimeMillis = trackTimeMillis/MILLI_TO_MIN;
    this.trackName = trackName;
    this.trackId = trackId;

}
function TvShow(trackName, trackTimeMillis, collectionName, trackId){
    this.trackTimeMillis = trackTimeMillis/MILLI_TO_MIN;
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.trackId = trackId;

}
function Software(trackName, sellerName, trackId){
    this.trackName = trackName;
    this.sellerName = sellerName;
    this.trackId = trackId;
}

// export multiple classes/functions/objects/etc
export {LibraryItem, Movie, Book, Album, Podcast, MusicVideo, Software, ShortFilm, TvShow, Audiobook, Song}