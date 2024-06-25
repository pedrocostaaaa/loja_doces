import mysql from "mysql2"
import config from "../Config.js";

class docemodel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_categoria) {
        let sql = `insert into doces (nome_categoria) values("${nome_categoria}");`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Categoria adicionada"])
            })
        });
    }

    read() {
        let sql = `SELECT * FROM doces; `

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });

    }

    update(id_categoria, nome_categoria) {
        let sql = `UPDATE parafusos SET nome_categoria="${nome_categoria}"WHERE id_categoria="${id_categoria}"`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, retorno])
                } else {
                    resolve([404, "Categoria não encontrada!"])
                }
            })
        });
    }

    delete(id_categoria, nome_categoria) {
        let sql = `DELETE  from doces WHERE id_categoria"${id_categoria}"`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, retorno])
                } else {
                    resolve([404, "Categoria apagada"])
                }
            })
        });
    }
}
export default new ParafusoModel()