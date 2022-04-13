import type { GatsbyBrowser } from "gatsby"
import { ReactKeycloakProvider } from "@react-keycloak/web"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    // @ts-expect-error gatsby needs this https://github.com/react-keycloak/react-keycloak/issues/133
    <ReactKeycloakProvider authClient={{}}>{element}</ReactKeycloakProvider>
  )
}
