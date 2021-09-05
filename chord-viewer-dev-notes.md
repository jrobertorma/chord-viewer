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

## About making noises
I'll try to use the midi data of the chords to produce some sound samples check

https://medium.com/swinginc/playing-with-midi-in-javascript-b6999f2913c3
https://github.com/mudcube/MIDI.js
