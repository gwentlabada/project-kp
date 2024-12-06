export const login = async (username: string, password: string): Promise<{ role: string } | null> => {
    // Contoh hardcoded autentikasi
    if (username === 'admin' && password === 'adminpass') {
        return { role: 'admin' }; // Admin
    } else if (username === 'user' && password === 'userpass') {
        return { role: 'user' }; // User biasa
    } else {
        return null; // Login gagal
    }
};
