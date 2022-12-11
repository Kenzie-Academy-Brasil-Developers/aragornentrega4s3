export class AppError extends Error{
    constructor(message, statusCode = 400){
        super();
        this.message = {message};
        this.statusCode = statusCode;
    }
}

export const errorHandler = (error, req, res, next) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json(error.message);
    }
    if(error.message.includes("invalid input syntax")){
      return res.status(404).json({message: "inválido"});
    }
    if(error.message.includes('is a required field')){
      return res.status(400).json({message: "campos requeridos"});
    }
    if(error.message.includes('id must be a number')){
      return res.status(404).json({message: "id deve ser um número."});
    }
    
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error." });
  };
  