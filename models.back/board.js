const pool = require('./index');
const { PoolConnection } = require('mysql2');



module.exports = {
  getBoardList: async () => {
    const [rows, fields] = await pool.query(
      "SELECT * FROM boards"
    )
    return [rows, fields]
  },

  // return Board;

  getBoardDetail: async (boardId) => {
    const query = `SELECT * from boards where id =?`;
    const [rows, fields] = await pool.query(
      query,
      [boardId]
    );
    //   let board = null;
    //   for (let _board of Board) {
    //     if (_board.id === boardId) {
    //       board = _board;
    //     }
    //   }
    // return board;
    // },
    return [rows, fields]
  },
  createBoard: function (title, content, author) {
    const query = "INSERT INTO boards (title,content) VALUES(?,?)";
    const [result, fields] = await pool.query(query, [title, content]);
    // Board = Board.concat([{
    //   id: autoId,
    //   title: title,
    //   content: content,
    //   author: author,
    //   createdAt: new Date().getTime()
    // }]);
    // autoId++;
    return [result, fields];
  },
  deleteBoard: async function (boardId) {
    const query = "DELETE FROM boards WHERE id=?"
    const [result, fields] = await Pool.query(query, [boardId]);
    // Board = Board.filter((board) => {
    //   return board.id !== boardId
    // })
    return [result, fields]
  },
  editBoard: async function (boardId, title, content, author) {
    const query = "UPDATE boards SET title =?, content=? WHERE id=?"
    // Board = Board.map((board) => {
    //   if (board.id === boardId) {
    //     return {
    //       ...board,
    //       title: title,
    //       content: content,
    //       author: author
    //     }
    //   }
    //   return board
    // });
    cosnt[result, fields] = pool.query(query, [title, content, boardId]);
    return [result, fields]
  }
}