import { kanguruApi } from "./api"
export interface PagamentoProps {
   objectId: string
   createdAt: string
   updatedAt: string
   valor: number
   titulo: string
   vencimento: string //Date
   pago: boolean
   débitoAutomatico: boolean
   dataPagamento?: string //Date
   recorrente?: boolean
   categoria?: "Moradia" | "Restaurante" | "Compras" | "Mercado" | "Outros"
}

export interface PostPagamentoProps {
   titulo: string
   valor: number
   vencimento: string //Date
   pago: boolean
   recorrente?: boolean
   débitoAutomatico?: boolean
   dataPagamento?: string //Date
   categoria?: "Moradia" | "Restaurante" | "Compras" | "Mercado" | "Outros"
}

export const getTodosPagamentos = () => {
   return kanguruApi.get("/classes/Pagamento")
}

export const getPagamentoPorId = (id: string) => {
   return kanguruApi.get("/classes/Pagamento", { params: { 'where': { 'objectId': id } } })
}

export const getPagamentoPorTitulo = (titulo: string) => {
   return kanguruApi.get("/classes/Pagamento", { params: { 'where': { 'titulo': titulo } } })
}

export const postPagamento = (pagamento: PostPagamentoProps) => {
   return kanguruApi.post("/classes/Pagamento", pagamento)
}
