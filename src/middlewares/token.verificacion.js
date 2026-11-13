import jwt from 'jsonwebtoken';

const jwtVerificacion = (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ mensaje: 'No autorizado. Inicie sesión' })
        }

        const payload = jwt.verify(token, process.env.SECRETJWT);

        req.usuarioId = payload.usuario;
        req.usuarioEmail = payload.email;
        req.usuarioRol= payload.rol;

        next()
    } catch (error) {
        res.clearCookie('token');
        return res.status(401).json({ mensaje: 'Token no válido' })
    }
}

export default jwtVerificacion;