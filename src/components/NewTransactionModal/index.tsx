import Modal from "react-modal"
import { Button, Container, RadioButton} from "./styles"
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import closeImg from "../../assets/close.svg"
import { FormEvent, useState } from "react"
import { useTransactions } from "../../hooks/useTransactions"


interface NewTransactionModalProps { 
    isOpen: boolean;
    onRequestClose: ()=> void;
 }

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState("deposit")
    const [ title, setTitle ] = useState("")
    const [ amount, setAmount ] = useState(0)
    const [ category, setCategory ]  = useState("")

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({
            title,
            amount,
            category,
            type

        })
       
        onRequestClose()
        setAmount(0)
        setTitle("")
        setCategory("")
        setType("deposit")
        
    }

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    <button 
     type="button" 
     onClick={ onRequestClose }
     className="react-modal-close" >

        <img src={ closeImg } alt="Close" />
            
    </button>

    <Container  onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar Transação</h2>

       <input 
        placeholder="Titulo"
        value={title}
        onChange={(e)=> setTitle(e.target.value) }
       />

       <input 
        type="number" 
        placeholder="Preço"
        value={amount}
        onChange= {e => setAmount(Number(e.target.value))}
       />

        <Button>

            <RadioButton 
            type="button"
            onClick={()=>{setType("deposit")}}
            isActive= { type === "deposit" }
            activeColor = "green"
            >
                <img src={income} alt="Entrada" />
                <span> Entrada </span> 
            </RadioButton>

            
            <RadioButton 
            type="button"
            onClick={()=>{setType("withdraw")}}
            isActive= {type === "withdraw"}
            activeColor = "red"

            >
                <img src={outcome} alt="Saida" />
                <span> Saída </span> 
            </RadioButton>

        </Button>

       <input 
        placeholder="Categoria" 
        value={category}
        onChange= { e => setCategory(e.target.value) }
        />
        <button type="submit">
            Cadastrar
        </button>
    
    </Container>
    
  </Modal>
  )
}
