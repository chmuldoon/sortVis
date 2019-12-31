import quickSort from "./quicksort";


export class Board {
  constructor(el){
    this.$el = el;
    this.populate()
    // this.test()
    debugger
    // this._swap(0, 1)
    this.arr = null
    this.bindEvents()
  }
  bindEvents() {
    const that = this
    $("quicksort").click(function(e) {
      that.quicksort();
    });
    
  }
  quicksort(){
    let quicksort = new quickSort(this.arr)
    this.arr = quicksort.sort()
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
  // _swap(pos1, pos2){
  //   let $1 = $(`.${pos1}`);
  //   let $2 = $(`.${pos2}`);
  //   let $pillar1 = $(`div.${pos1} > div`)
  //   let $pillar2 = $(`div.${pos2} > div`)
  //   $1.empty()
  //   $2.empty()
  //   $1.append($pillar2)
  //   $2.append($pillar1)
  // }
  populate(){
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // debugger
    let shuffled = this._shuffle(array)

    this.arr = array
    for (let i = 0; i < 15; i++) {
      const div = $("<div>");
      div.addClass("spot")
      .addClass(`${i}`)
      .data("index", i)
      $(".section").append(div);
    }
    this._fillColumns(shuffled)
  }
  _fillColumns(arr){
    for (let i = 0; i < arr.length; i++) {
      const height = arr[i];
      let $div = $(`.${i}`)
      const pillar = $("<div>")
      pillar
      .addClass("pillar")
      .data("count", height)
      .css({"height": `${(1 * height) * 30}px`})
      $div.append(pillar)
    }
  }

}

export default Board
