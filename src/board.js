

export class Board {
  constructor(el){
    this.$el = el;
    this.populate()
  }
  _shuffle(arr) {
  let curr = arr.length, temp, randIdx;

  while (0 !== curr) {

    randIdx = Math.floor(Math.random() * curr);
    curr -= 1;

    temp = arr[curr];
    arr[curr] = arr[randIdx];
    arr[randIdx] = temp;
  }

  return arr;
  }
  populate(){
    let array = [1,2,3,4,5,6,7,8,9,10]
    debugger
    let shuffled = this._shuffle(array)
    const section = $("<div>")
    section.addClass("section")
    this.$el.append(section)
    // for(let i = 0; i < array.length; i++){

    // }
    // shuffled.map(height => {
      
    // })


  }

}

export default Board
