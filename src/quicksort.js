
class quickSort {
  constructor(arr) {
    this.arr = arr;
  }
  bindEvents() {

  }
  async sort() {
    debugger
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < this.arr.length - 1; i++) {
        if (this.arr[i] > this.arr[i + 1]) {
          sorted = false;
          let temp = this.arr[i];
          this.arr[i] = this.arr[i + 1];
          this.arr[i + 1] = temp;
          this._swap(i, i + 1);
        }
      }
    }
    return this.arr
  }
  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  async _swap(first, second) {
    let $1 = $(`.${first}`);
    let $2 = $(`.${second}`);
    let $pillar1 = $(`div.${first} > div`);
    let $pillar2 = $(`div.${second} > div`);
    await this.sleep(30).then(() => {
      $1.empty();
      $2.empty();
      $1.append($pillar2);
      $2.append($pillar1);
    });
  }
}
export default quickSort