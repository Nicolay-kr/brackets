module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let newArr = [];
    function collect(array){
      let oldArr = newArr.slice(0, newArr.length);
      if(array.length > 0){
        for(let i = 0; i < array.length; i++){
          for(j = 0; j < bracketsConfig.length; j++){
            if(array[i] == bracketsConfig[j][0] && array[i+1] == bracketsConfig[j][1] ){
              newArr.push(array[i]);
              newArr.push(array[i+1]);
              arr.splice(i,1,'');
              arr.splice(i+1,1,'');
            }
          }
        }
        let Arro = [];
        for(let i = 0; i < array.length; i++){
          if(array[i] !== ''){
            Arro.push(array[i])
          }
        }
        arr = Arro;
        if(oldArr.length !== newArr.length){
          collect(arr)
        }
      }
    }
    collect(arr);
    return arr.length == 0 ?  true : false
}
