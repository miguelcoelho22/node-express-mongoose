import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

async function paginacao(req, res, next) {
    
    try {

      let { paginas = 1, limite = 5, ordenacao = "_id:-1"} = req.query;

      let [campoOrdenacao, ordem] = ordenacao.split(":");

      paginas = parseInt(paginas);
      limite = parseInt(limite);

      const resultado = req.resultado;

      if(paginas > 0 && limite > 0 ){

      const livrosResultado = await resultado.find()
        .sort( { [campoOrdenacao]: ordem })
        .skip((paginas - 1) * limite)
        .limit(limite)
        .populate("autor")
        .exec();
        
        res.status(200).json(livrosResultado);

      }else{
        next(new RequisicaoIncorreta());
      }
    }
      catch(error){
        next(error);
      }
}


export default paginacao;