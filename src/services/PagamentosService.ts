import axios from "axios"

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

const kanguruApi = axios.create({
   baseURL: "https://parseapi.back4app.com/classes",
   headers: {
      Accept: "application/json",
      "X-Parse-Application-Id": "J4VmpvYgyyMLIKv6Taw091kaYzt5TqswJHnAgJ9g",
      "X-Parse-REST-API-Key": "uEtFO1gKixJvpj1tVVMnjr6jI7jJxxqJHd18w7n4",
   },
})

export const getTodosPagamentos = () => {
   return kanguruApi.get("/Pagamento")
}

export const getPagamentoPorId = (id: string) => {
   return kanguruApi.get("/Pagamento", { params: { 'where': { 'objectId': id } } })
}

export const getPagamentoPorTitulo = (titulo: string) => {
   return kanguruApi.get("/Pagamento", { params: { 'where': { 'titulo': titulo } } })
}

export const postPagamento = (pagamento: PostPagamentoProps) => {
   return kanguruApi.post("/Pagamento", pagamento)
}
