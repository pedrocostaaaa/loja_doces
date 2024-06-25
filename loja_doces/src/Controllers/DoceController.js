import docemodel from "../Models/docemodel.js";

class docesController {
    constructor() {
    }

    create(req, res) {
        const nome_categoria = req.body.nome;
        ParafusoModel.create(nome_categoria).then(
            resposta => {
                console.debug("inserindo uma categoria de doces");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: inserindo uma categoria de doces");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    read(req, res) {
        docemodel.read().then(
            resposta => {
                console.debug("Mostrando as categorias de doces disponíveis");
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug("ERRO ao mostrar as categorias de doces disponíveis");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_categoria = req.params.id_categoria;
        const nome_categoria = req.body.nome;

        docemodel.update(id_categoria, nome_categoria).then(
            resposta => {
                console.debug("Atualizando as categorias de doces disponíveis")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar as categorias de doces disponíveis");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req, res) {
        const id_categoria = req.params.id_categoria;
        const nome_categoria = req.body.nome_categoria;

        docemodel.delete(id_categoria, nome_categoria).then(
            resposta => {
                console.debug("Deletando as categorias de doces disponíveis")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO ao atualizar as categorias de doces disponíveis");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

}
export default new docesController();
