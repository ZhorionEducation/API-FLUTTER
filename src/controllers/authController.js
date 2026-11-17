const service = require("../services/authService");

const isBlank = (value) => !value || value.trim() === "";

const login = async (req, res) => {
    try {
        //  validacion basica de login
        const { email, password } = req.body;
        if ([email, password].some(isBlank)) {
            return res.status(400).json({ message: "Contraseña y email son requeridos" });
        }
        const result = await service.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    login,
};