const repository = require("../repositories/authRepository");
const jwt = require("jsonwebtoken");

const normalize = (value) => String(value || "").trim();

const login = async (email, password) => {
    email = normalize(email);
    password = normalize(password);

    if (!email || !password) {
        throw new Error("Email y contraseña son requeridos");
    }

    const user = await repository.findUserByEmail(email);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const valid = user.password === password;
    if (!valid) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { token };
};

module.exports = {
    login,
};
    