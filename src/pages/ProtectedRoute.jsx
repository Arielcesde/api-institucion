import { Navigate } from "react-router-dom"
import { getLocalStorage } from "../utils/local-storage"

function ProtectedRoute({ componente }) {
    let token = getLocalStorage("token")
    if (!token) {
        return <Navigate to={"/"} />
    }
    return componente
}

export default ProtectedRoute