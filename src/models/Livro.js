import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["alura, batman"],
        message: " a editora {VALUE} fornecida nao é um valor permitido"
      }
    },
    numeroPaginas: {type: Number,
      validate: {
        validator: (valor) => {
          return valor > 1 && valor < 5000;
        },
        message: "numero de paginas menor que 1 ou maior que 5000"
      }
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;