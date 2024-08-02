exports.onBrowserWindowCreated = (window) => {
    const sentences = [
        "Shiny numbers!",
        "Am I not running fast enough? :(",
        "I'm working as hard as I can!",
        "Will I ever be good enough for you? :(",
        "Speedy. Zooooom!",
        "Hello world",
        "40% better than a crash report.",
        "Now with extra numbers",
        "Now with less numbers",
        "Now with the same numbers",
        "You should add flames to things, it makes them go faster!",
        "Do you feel the need for... optimization?",
        "*cracks redstone whip*",
        "Maybe if you treated it better then it'll have more motivation to work faster! Poor server.",
        "Oh my god, it's full of stats!"
    ]
    console.debug("\x1b[32m[Easter Egg]\x1b[0m \x1b[33m%s\x1b[0m", sentences[Math.floor(Math.random() * sentences.length)])    
}