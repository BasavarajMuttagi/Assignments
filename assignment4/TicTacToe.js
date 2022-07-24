class Cell{
    constructor() {
        this.cellState = null
    }
    setCellState(player){
           this.cellState = player.mark 
    }
}
            
class Board{
    constructor() {
        this.board = [new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell()]
    }

    CheckWinner(mark) {
        if (new Set([this.board[0].cellState, this.board[1].cellState, this.board[2].cellState]).size == 1 && new Set([this.board[0].cellState, this.board[1].cellState, this.board[2].cellState]).has(mark)) {
            return true;
          }
          if (new Set([this.board[0].cellState, this.board[3].cellState, this.board[6].cellState]).size == 1 && new Set([this.board[0].cellState, this.board[3].cellState, this.board[6].cellState]).has(mark)) {
            return true;
          }
          if (new Set([this.board[2].cellState, this.board[5].cellState, this.board[8].cellState]).size == 1 && new Set([this.board[2].cellState, this.board[5].cellState, this.board[8].cellState]).has(mark)) {
            return true;
          }
          if (new Set([this.board[6].cellState, this.board[7].cellState, this.board[8].cellState]).size == 1 && new Set([this.board[6].cellState, this.board[7].cellState, this.board[8].cellState]).has(mark)) {
            return true;
          }
          if (new Set([this.board[0].cellState, this.board[4].cellState, this.board[8].cellState]).size == 1 && new Set([this.board[0].cellState, this.board[4].cellState, this.board[8].cellState]).has(mark)) {
            return true;
          }
          if (new Set([this.board[2].cellState, this.board[4].cellState, this.board[6].cellState]).size == 1 && new Set([this.board[2].cellState, this.board[4].cellState, this.board[6].cellState]).has(mark)) {
            return true;
          }else {
            return false;
          }
    }
    isCellEmpty(cellnumber){
        
       let temp =  this.board[cellnumber].cellState
       if(temp == null){
            return true
       }
       return false
    }
    isCellNumberValid(cellnumber){
        if(cellnumber >-1 && cellnumber<=8){
            return true
        }
        return false
    }

    PrintBoard(){
        console.log(this.board[0].cellState +"|"+this.board[1].cellState+"|"+this.board[2].cellState)
        console.log("----------------");
        console.log(this.board[3].cellState +"|"+this.board[4].cellState+"|"+this.board[5].cellState)
        console.log("----------------");
        console.log(this.board[6].cellState +"|"+this.board[7].cellState+"|"+this.board[8].cellState)
        console.log();
    }
    
}        
         
class Player{
    constructor(name,mark) {
        this.name = name
        this.mark = mark
    }
}          
                
class Game{
    constructor(player1,player2) {
        this.player1 = new Player(player1,'X')
        this.player2 = new Player(player2,'O')
        this.board = new Board()
        this.turn = 0
    }

    play(cellnumber){
        if(!this.board.isCellNumberValid(cellnumber)){
            console.log("Cell Number Out Of Range!");
            return "Cell Number Out Of Range!"
        }
        if(!this.board.isCellEmpty(cellnumber)){
            console.log("Choose another Cell!");
            return "Choose another Cell!"
        }
       

        if(this.turn % 2 == 0){
            this.board.board[cellnumber].setCellState(this.player1)
            this.board.PrintBoard()
            if(this.board.CheckWinner(this.player1.mark))
            {
                console.log(this.player1.mark + "Won");
                return true,this.player1.mark + "Won"
            }
            this.turn++
            
        }
        else{
            this.board.board[cellnumber].setCellState(this.player2)
            this.board.PrintBoard()
            if(this.board.CheckWinner(this.player2)){
                console.log(this.player2.mark + "Won");
                return true,this.player2.mark + "Won"
            }
            this.turn++
        }
    }

}    



let g = new Game('Lewis','George')
g.play(0)
g.play(1)
g.play(2)
g.play(3)
g.play(4)
g.play(5)
g.play(6)

