import { useEffect } from "react";

function ProtectedRoute ({children}) {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch()
      } catch (error) {
        console.log(error?.message)
      }
    })()
  }, [])
  return children;
}

export default ProtectedRoute;