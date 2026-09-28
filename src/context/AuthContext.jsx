import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("shopsphere_user") || "null"));

  useEffect(() => {
    if (user) localStorage.setItem("shopsphere_user", JSON.stringify(user));
    else localStorage.removeItem("shopsphere_user");
  }, [user]);

  const login = (email) => setUser({ name: email.split("@")[0], email, role: "customer" });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);