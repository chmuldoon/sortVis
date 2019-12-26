

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
  change_spot(top, left){
  
    $(".spot").css({"top": top, "left": left})
  }
  populate(){
    let array = [1,2,3,4,5,6,7,8,9,10]
    // debugger
    let shuffled = this._shuffle(array)
    // const section = $("<div>")
    // section.addClass("section")
    // this.$el.append(section)
    // // for(let i = 0; i < array.length; i++){

    // // }
    // let spot = $("<div>")
    // spot.addClass("spot")
    // section.append(spot)

    debugger
    shuffled.map(height => {
      const div = $("<div>")
      div.addClass("spot")
          .data("height", height)
          .css("height",`${height * 40}px`)
      $(".section").append(div)
    })


  }

}

export default Board
