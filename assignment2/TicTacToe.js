let board  = [null,null,null,null,null,null,null,null,null]
var Turn = 'X'

function PrintBoard()
{
    for(let i = 0; i<board.length; i++){
        console.log(board[i])
    }
}

function CheckWinner(Winner) {
    
    if (new Set([board[0], board[1], board[2]]).size == 1 && new Set([board[0], board[1], board[2]]).has(Winner)) {
      return 1;
    }
    if (new Set([board[0], board[3], board[6]]).size == 1 && new Set([board[0], board[3], board[6]]).has(Winner)) {
      return 1;
    }
    if (new Set([board[2], board[5], board[8]]).size == 1 && new Set([board[2], board[5], board[8]]).has(Winner)) {
      return 1;
    }
    if (new Set([board[6], board[7], board[8]]).size == 1 && new Set([board[6], board[7], board[8]]).has(Winner)) {
      return 1;
    }
    if (new Set([board[0], board[4], board[8]]).size == 1 && new Set([board[0], board[4], board[8]]).has(Winner)) {
      return 1;
    }
    if (new Set([board[2], board[4], board[6]]).size == 1 && new Set([board[2], board[4], board[6]]).has(Winner)) {
      return 1;
    }else {
      return -1;
    }
  }


    for(let i = 0; i<board.length; i++){
        if(Turn == 'X')
        {
            let cellNumber = prompt("X Enter Cell")
            if(board[cellNumber] == null){
                board[cellNumber] = 'X'
                let Winner = CheckWinner('X')
                if(Winner == 1){
                    console.log('X Won')
                    PrintBoard()
                    break;
                }
                PrintBoard()
                Turn = 'O'
                console.log("O's Turn")
            }
            else
            {
                while(1){
                    let cellNumber = prompt("X Enter empty Cell ")
                    if(board[cellNumber] == null)
                    {
                        board[cellNumber] = 'X'
                        let Winner = CheckWinner('X')
                        if(Winner == 1){
                            console.log('X Won')
                            PrintBoard()
                            break;
                        }
                        break
                    }
                }
                Turn = 'O'
                console.log("O's Turn")
    
            }
    
            
        }
    
        else
        {
            let cellNumber = prompt("O Enter Cell")
            if(board[cellNumber] == null){
                board[cellNumber] = 'O'
                let Winner = CheckWinner('X')
                if(Winner == 1){
                    console.log('O Won')
                    PrintBoard()
                    break;
                }
                PrintBoard()
                Turn = 'X'
                console.log("X's Turn")
            }
            else
            {
                while(1){
                    let cellNumber = prompt("O Enter empty Cell ")
                    if(board[cellNumber] == null)
                    {
                        board[cellNumber] = 'O'
                        let Winner = CheckWinner('O')
                        if(Winner == 1){
                            console.log('O Won')
                            PrintBoard()
                            break;
                        }
                        break
                    }
                }
                Turn = 'X'
                console.log("X's Turn")
    
            }
            }
    
         
        }
        
    


