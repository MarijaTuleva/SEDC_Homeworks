
arrayOne = ['Mari', 'happy', 'playing'];
arrayTwo = ['Tamara', 'sad', 'studying'];


function tellStory(array) {
    let name = array[0];
    let mood = array[1];
    let activity = array[2];
    story = console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day.The end.`);
    
}

let namesReplace1 = tellStory(arrayOne);
let namesReplace2 = tellStory(arrayTwo);



