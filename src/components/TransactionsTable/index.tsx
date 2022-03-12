import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'



export const TransactionsTable = () => {

    const { transactions } = useTransactions()

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th className="category">Categoria</th>
                    <th className="data" >Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map( transaction  => {
                    return(
                        <tr key={transaction.id}>
                            <td> {transaction.title} </td>
                            <td className={transaction.type}> 
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(transaction.amount)} 
                            </td>
                            <td className= "category"> {transaction.category} </td>
                            <td className="data"> 
                                {new Intl.DateTimeFormat("pt-BR").format(
                                    new Date(transaction.createdAt)
                                )} 
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </Container>
  )
}
