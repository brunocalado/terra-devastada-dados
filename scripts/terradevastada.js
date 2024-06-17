const moduleName = 'terra-devastada-dados';

import {TerraDevastada} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["z"] = TerraDevastada;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let success = 0;
        let szRoll = false;
        
        message.rolls[0].dice.forEach(dice => {            
            if(dice instanceof TerraDevastada){
                szRoll = true;
                dice.results.forEach(res => {
                    switch(res.result){
                        case 2:
                            success++;
                            break;
                        case 4:
                            success++;
                            break;
                        case 6:
                            success++;
                            break;
                    }
                });
            }
        });
        
        /*
        console.log('--------------------')
        console.log(success)
        console.log('--------------------')
        */
        
        if(szRoll){
            ChatMessage.create({
                user: game.user.id,
                content: `<b>Sucessos</b> ${success}`,
                speaker: ChatMessage.getSpeaker()
            });    /*    
            ChatMessage.create({
                content: `<b>Sucessos</b> ${success}`,
                whisper: message.data.whisper,
                blind: message.data.blind
            });
            */
        }
    }
});


Hooks.once('diceSoNiceReady', (dice3d) => {
  // MASKS
  dice3d.addSystem({id:"terra-devastada", name:"Terra Devastada"}, false);
  dice3d.addDicePreset({
    type:"d6",
    system:"terra-devastada",
    labels:[
      'modules/' + moduleName + '/assets/faces/d1.webp', 
      'modules/' + moduleName + '/assets/faces/d2.webp', 
      'modules/' + moduleName + '/assets/faces/d3.webp',
      'modules/' + moduleName + '/assets/faces/d4.webp', 
      'modules/' + moduleName + '/assets/faces/d5.webp', 		
      'modules/' + moduleName + '/assets/faces/d6.webp'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/assets/faces/b1.png', 
      'modules/' + moduleName + '/assets/faces/b2.png', 
      'modules/' + moduleName + '/assets/faces/b3.png',
      'modules/' + moduleName + '/assets/faces/b4.png',		
      'modules/' + moduleName + '/assets/faces/b5.png',
      'modules/' + moduleName + '/assets/faces/b6.png'
    ]      
  });

	dice3d.addColorset({
		name:'tdblack',
		description:'Terra Devastada',
		category:'Terra Devastada',
		foreground:'#CDB800',
		background:'#790914',
		outline:'black',
		edge:'#411a0e',
		texture:'none'
	},"no");
  
});
