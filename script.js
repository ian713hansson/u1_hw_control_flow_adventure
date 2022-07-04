let name = prompt (`What is your name?`)
alert(`What's up ${name} !`)

confirm (`We're finally here, looks kind of creepy, are you sure you want to camp here?`)

alert (`We need to decide where to stay...`)


let choice = prompt ('Do you want to take the cabin, tent or bunkhouse? Type C, T or B')
if (choice === 'C') {
    alert('Sounds good, I saw a machete over by the bunkbeds.')
} else if (choice === 'T') {
    alert('Tents are the way to go, out in nature! Be sure to zip that sleeping bag up tight.')
} else if (choice === 'B') {
    alert('I think a bunch of counselers died in there in the 80s...')
}

let fate = prompt (`You hear a branch snap outside, what are you going to do? Type GO OUTSIDE, ASK YOUR FRIEND TO GO or SHRUG IT OFF
`)
if (fate === 'GO OUTSIDE') {
    alert('Was that a person standing behind that tree?');
    let inspect = prompt ('Ummm, what should you do? Type CHECK IT OUT, BACK INSIDE or STAY STILL')
        if (inspect === 'CHECK IT OUT') {
            alert('Looks like it was a hockey mask wearing, undead maniac who`s mission is to kill you. Unfortunately you don`t stand a chance, see ya later.')
        }
        else if (inspect === 'BACK INSIDE') {
            alert('Nice try but here comes Jason Voorhees busting in and driving a harpoon through your throat.')
        }
        else if(inspect === 'STAY STILL') {
            alert('May be a good tactic with a bear, but this is the undead son of a psychotic mother we are dealing with, you gonna die, hopefully it`s quick')
        }
} else if (fate === 'ASK YOUR FRIEND TO GO') {
    alert('It`s been a second since your buddy went out there, are you sure everything is ok?'); 
    let friend = prompt ('Seriously, it`s been a minute, maybe you should CALL OUT, GO AFTER THEM or GET BACK INSIDE')
        if (friend === 'CALL OUT') {
            alert('You hear nothing but the sound of your own bones cracking as you are grabbed and cracked over a decrepit knee like a twig.')
        }
        else if (friend === 'GO AFTER THEM') {
            let thisIsIt = prompt ('You encounter Jason Voorhees but you have no weapon, either RUN, FIGHT or WILLINGLY DIE');
                if (thisIsIt === 'RUN') {
                    confirm('You may be a fast runner, but Jason Voorhees is a nice shot with a machete. Ya dead from 50 ft.WANNA TRY AGAIN??')
                }
                else if (thisIsIt === 'FIGHT') {
                    confirm('You try to punch through Jason`s hockey mask, and although you are quite strong, you break your hand, and then Jason rips your arms off. Ya dead. WANNA TRY AGAIN??')
                }
                else if (thisIsIt === 'WILLINGLY DIE') {
                    confirm('This is probably your best move because when Jason Voorhees is involved... ya dead. WANNA TRY AGAIN??')
                }
        }
        else if (friend === 'GET BACK INSIDE') {
            confirm('Nice try, but Jason doesn`t move that slowly, you dead... WANNA TRY AGAIN??')
        }
} else if (fate === 'SHRUG IT OFF') {
   let noise = prompt('A huge crash! That was definitely not an animal, you need to do something. GRAB something to fight with, RUN like the dickens, or PRETEND to be sleeping.')
    if (noise === 'GRAB') {
        confirm('Oh heck yeah, let`s do this! You guessed it, Jason Voorhees comes crashing in and with you`re stellar fighting skills you are able to disable him and run to freedom, congrats you are the `Final Girl` WANNA PLAY AGAIN??')    
    }
    else if (noise === 'RUN') {
        confirm('You can run but you can`t hide, becasue Jason Voorhees has an uncanny ability to sniff out fresh blood, and running only makes your blood fresher. Ya dead... WANNA TRY AGAIN??')
    }
    else if (noise === PRETEND) {
        confirm('Unfortunately this isn`t Ferris Beuller`s Day Off and Jason Voorhees isn`t a gullible mother, in fact he has some pretty big mommy issues, and he pushes an arrow through your neck...Ya dead. WANNA PLAY AGAIN??')
    }
}