import pkg from 'pg';

const {Pool} = pkg;
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'kl3004',
    database: 'chatDb'
});

const sql = "select * from rooms";
pool.query(sql, (err, res)=>{
    if (err){ throw err}
    console.table(res.rows)
    pool.end()
})

export default { pool };