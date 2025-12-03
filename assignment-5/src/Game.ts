export class Game {
    private _lastSymbol: string = ' ';
    private _board: Board = new Board();

    public Play(symbol: string, x: number, y: number) : void {
        //if first move
        if (this._lastSymbol == ' ') {
            //if player is X
            if (symbol == 'O') {
                throw new Error("Invalid first player");
            }
        }
        //if not first move but player repeated
        else if (symbol == this._lastSymbol) {
            throw new Error("Invalid next player");
        }
        //if not first move but play on an already played tile
        else if (this._board.TileAt(x, y).Symbol != ' ') {
            throw new Error("Invalid position");
        }

        // update game state
        this._lastSymbol = symbol;
        this._board.AddTileAt(symbol, x, y);
    }

    public Winner() : string {
        //if the positions in first row are taken
        let x = 0
        if (this._board.TileAt(x, 0)!.Symbol != ' ' &&
                this._board.TileAt(x, 1)!.Symbol != ' ' &&
                this._board.TileAt(x, 2)!.Symbol != ' ') {
            //if first row is full with same symbol
            if (this._board.TileAt(x, 0)!.Symbol ==
                    this._board.TileAt(x, 1)!.Symbol &&
                    this._board.TileAt(x, 2)!.Symbol == this._board.TileAt(0, 1)!.Symbol) {
                return this._board.TileAt(x, 0)!.Symbol;
            }
        }

        //if the positions in second row are taken
        x = 1
        if (this._board.TileAt(x, 0)!.Symbol != ' ' &&
                this._board.TileAt(x, 1)!.Symbol != ' ' &&
                this._board.TileAt(x, 2)!.Symbol != ' ') {
            //if middle row is full with same symbol
            if (this._board.TileAt(x, 0)!.Symbol ==
                    this._board.TileAt(x, 1)!.Symbol &&
                    this._board.TileAt(x, 2)!.Symbol ==
                            this._board.TileAt(x, 1)!.Symbol) {
                return this._board.TileAt(x, 0)!.Symbol;
            }
        }

        //if the positions in last row are taken
        x = 2
        if (this._board.TileAt(x, 0)!.Symbol != ' ' &&
                this._board.TileAt(x, 1)!.Symbol != ' ' &&
                this._board.TileAt(x, 2)!.Symbol != ' ') {
            //if middle row is full with same symbol
            if (this._board.TileAt(x, 0)!.Symbol ==
                    this._board.TileAt(x, 1)!.Symbol &&
                    this._board.TileAt(x, 2)!.Symbol ==
                            this._board.TileAt(x, 1)!.Symbol) {
                return this._board.TileAt(x, 0)!.Symbol;
            }
        }

        return ' ';
    }
}