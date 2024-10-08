const moduleName = 'terra-devastada-dados';

export class TerraDevastada extends foundry.dice.terms.Die {
  
  constructor(termData) {
    termData.faces=6;
    termData.custom=true;
    termData.rollModes = [
      {
        "label": "d6 Explode",
        "formula": "6",
        "number": "explode",
        "compare": "="
      }
    ];
    super(termData);
  }
  
/*
  static get defaultTermData() {
    return {
      number: 1,
      faces: 6,
      modifiers: ['x'],
      options: { flavor: 'Terra Devastada' }
    };
  }
/*

  /* -------------------------------------------- */

  /** @override */
  static DENOMINATION = "z";

  /** @override */
  get total(){
    return this.results.length;
  }

  /* -------------------------------------------- */

  /** @override */
  getResultLabel(result) {
    return {
      "1": '<img src="modules/' + moduleName + '/assets/faces/c1.webp" />',
      "2": '<img src="modules/' + moduleName + '/assets/faces/c2.webp" />',
      "3": '<img src="modules/' + moduleName + '/assets/faces/c3.webp" />',
      "4": '<img src="modules/' + moduleName + '/assets/faces/c4.webp" />',
      "5": '<img src="modules/' + moduleName + '/assets/faces/c5.webp" />',			
      "6": '<img src="modules/' + moduleName + '/assets/faces/c6.webp" />'
    }[result.result];
  }
}