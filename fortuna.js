var Fortuna = {};

/*
Get the Fortuna library up an running
*/
Fortuna.init = function( args ) {
    // get arguments & set sensible defaults if no argument is set
    var toHit   = args.toHit || 4;
    var toWound = args.toWound || 4;
    var save    = args.save || 4;
    var attacks = args.attacks || 1;

    // validate args - set minimums and maximums
    // TODO

    // calculate probability of each individual roll
    toHitResult   = Fortuna.calculateToHit( { toHit: toHit } );
    toWoundResult = Fortuna.calculateToWound( { toWound: toWound } );
    saveResult    = Fortuna.calculateSave( { save: save } );

    return toHitResult * toWoundResult * saveResult * attacks;
};

/*
Calculate the to hit roll
*/
Fortuna.calculateToHit = function( args ) {
    // get args
    var toHit   = args.toHit;

    // calculate probability of the to hit roll
    result   = ( ( 7 - toHit ) / 6 ); // roll at or over

    return result;
};

/*
Calculate the to wound roll
*/
Fortuna.calculateToWound = function( args ) {
    // get args
    var toWound   = args.toWound;

    // calculate probability of the to wound roll
    result = ( ( 7 - toWound ) / 6 ); // roll at or over

    return result;
};

/*
Calculate the save roll
*/
Fortuna.calculateSave = function( args ) {
    // get args
    var save   = args.save;

    // calculate probability of the save roll
    result = ( 1 - ( ( 7 - save ) / 6 ) ); // roll under

    return result;
};
