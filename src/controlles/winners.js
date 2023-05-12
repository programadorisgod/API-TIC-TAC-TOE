const { connection } = require("../../config/connectDB");

const getWinners = async (req, res) => {
    try {
      const query = "SELECT * FROM winners";
      
        connection.query(query, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
            } else {
                res.status(200).json(result);
                console.log(result)

            }
        }   
        );
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const createWinner = async (req, res) => {
    const { name, time } = req.body;


    try {
        const query = "INSERT INTO winners (name, date) VALUES (?, ?)";
        connection.query(
            query,
            [name, time],
            (err, result) => {
                if (err) {
                    res.status(400).json({ error: err.message });
                } else {
                    res.status(201).json({result});
                }
            }
        );
  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getWinners, createWinner };