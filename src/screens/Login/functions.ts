import * as LocalAuthentication from "expo-local-authentication"
import { useState } from "react"

export interface biometriaProps {
   harwareDisponivel: boolean
   biometriaRegistrada: boolean
   autenticaçoesDisponiveis: LocalAuthentication.SecurityLevel
}

export const FunctionsAutenticarUsuario = ( biometria: biometriaProps, setBiometria: React.Dispatch<React.SetStateAction<biometriaProps>> ) => {

    const [usuarioAutenticado, setUsuarioAutenticado] = useState<LocalAuthentication.LocalAuthenticationResult | boolean | undefined>();

   async function checarBiometria() {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      setBiometria({ ...biometria, harwareDisponivel: compatible })
      compatible ? checarBiometriaSalva() : console.log("Celular não compatível com autenticação biométrica")
   }

   async function checarBiometriaSalva() {
      console.log("Compatível com autenticação")
      const autenticacaoSalva = await LocalAuthentication.isEnrolledAsync()
      setBiometria({ ...biometria, biometriaRegistrada: autenticacaoSalva })
      autenticacaoSalva ? pegarTiposDeAutenticacao() : console.log("Nenhum registro biométrico salvo")
   }

   async function pegarTiposDeAutenticacao() {
      const autenticaçoesDisponiveis = await LocalAuthentication.getEnrolledLevelAsync()
      setBiometria({ ...biometria, autenticaçoesDisponiveis: autenticaçoesDisponiveis })

      switch (autenticaçoesDisponiveis) {
         case 0:
            console.log("Nenhuma forma de autenticação registrada")
            break
         case 1:
            console.log("Autenticação do tipo 'segredo' disponível")
            break
         case 2:
            console.log("Autenticação biométrica disponível")
            break
      }
   }

   async function autenticarUsuario() {
    const autenticado = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Kanguru', 
        cancelLabel: 'Usar Pin',
        disableDeviceFallback: false,
        fallbackLabel: 'Use seu pin ou segredo'
    })

    console.log(`Usuario autenticado: ${autenticado.success}`)
    setUsuarioAutenticado(autenticado)
   }

   return {
      checarBiometria,
      checarBiometriaSalva,
      pegarTiposDeAutenticacao,
      autenticarUsuario,
      usuarioAutenticado,
      setUsuarioAutenticado
   }
}
