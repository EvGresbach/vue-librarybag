const MILLITOMIN = 60000;

function LibraryItem(media, removeFunction, qty){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}
    media.qty = qty || 2;

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        if(media.qty >0){
            media.qty --;
            this.status = STATUSES.CHECKED_OUT;
        }
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
    this.trackTimeMillis = trackTimeMillis/MILLITOMIN;
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
    this.trackTimeMillis = trackTimeMillis/MILLITOMIN;
    this.trackName = trackName;
    this.trackId = trackId;

}
function TvShow(trackName, trackTimeMillis, collectionName, trackId){
    this.trackTimeMillis = trackTimeMillis/MILLITOMIN;
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