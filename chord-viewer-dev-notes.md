# NOTES
## About Chord viewer

Sometimes I need to look for diatonic chords for a given key, there are some tools to do that, but I wanted to create one.

This will be the first version of a web app that will be able to return all diatonic chords for a specific key, maybe one day it will include sounds and tonal modes and more things.

But as a sort of MVP this version will display chords.

## Architecture

I found an interesting chord db written by tombatossals [chords-db](https://github.com/tombatossals/chords-db).

The first approach is to use this db to display chords.

Luckily for my plans, there is this package to display svg guitar chords using a the chords db, it is [react-chords](https://github.com/tombatossals/react-chords) by tombatossals (again).

## How does it work
The app fetches the chords db and turns it into an array.

Then it passes a filter to return the needed chords, based on an object.

Then renders the diagrams for those chords.

Lastly every chord will have an onClick listener to play the chord (stil working on that lol)

## About making noises
I'll try to use the midi data of the chords to produce some sound samples see: 
https://github.com/musicandcode/Chord-Player

https://github.com/tonaljs/tonal - Musical theory library

We have two main packages to use from tonaljs

* https://github.com/tonaljs/tonal/tree/main/packages/tonal: Returns notes data such as height, letter, midi, name, etc. e.g.
    
note('C4');

* https://github.com/tonaljs/tonal/tree/main/packages/chord


https://howlerjs.com/ - Audio library

It is possible that we won't use the midi prop of the chord db, we may need to do some tweaks.