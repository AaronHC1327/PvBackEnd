import { Request, Response } from "express";
import db from "../db/connection";
import Respuesta from '../models/Respuesta';

export const getCliente = async (req: Request, res: Response) => {
    const response = new Respuesta();
    try {
        const { id } = req.params;

        const results = await db.query('CALL sp_Clientes (:opcion, :cliente, :nombre, :correo, :telefono, :telefonoDif , :usuarioAfecta);',
                    {
                        replacements: { 
                            opcion: 'Get', 
                            cliente: Number(id),
                            nombre: '',
                            correo:  '',
                            telefono: '',
                            telefonoDif: '',
                            usuarioAfecta: 0
                        }
                    }
                );

        response.data = results || [];
        res.json(response);
    } catch (error) {
        response.success = false;
        response.msg = error.message;
        return res.status(500).json(response);
    }
}

export const getClientes = async (req: Request, res: Response) => {
    const response = new Respuesta();
    try {
        const results = await db.query('CALL sp_Clientes (:opcion, :cliente, :nombre, :correo, :telefono, :telefonoDif , :usuarioAfecta);',
                    {
                        replacements: { 
                            opcion: 'Get', 
                            cliente: 0,
                            nombre: '',
                            correo:  '',
                            telefono: '',
                            telefonoDif: '',
                            usuarioAfecta: 0
                        }
                    }
                );

        response.data = results || [];
        res.json(response);
    } catch (error) {
        response.success = false;
        response.msg = error.message;
        return res.status(500).json(response);
    }
}

export const postClientes = async (req: Request, res: Response) => {
    const response = new Respuesta();
    try {
        const { body } = req;

        const usuarioAfecta = 0;

        await db.query('CALL sp_Clientes (:opcion, :cliente, :nombre, :correo, :telefono, :telefonoDif , :usuarioAfecta);',
                    {
                        replacements: { 
                            opcion: body.opcion, 
                            cliente: body.cliente,
                            nombre: body.nombre,
                            correo:  body.correo,
                            telefono: body.telefono,
                            telefonoDif: body.telefonoDif,
                            usuarioAfecta: usuarioAfecta
                        }
                    }
                );

        response.msg = 'Created';
        res.json(response);
    } catch (error) {
        response.success = false;
        response.msg = error.message;
        return res.status(500).json(response);
    }
}

export const putClientes = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'get'
    })

}

export const deleteClientes = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'delete'
    })

}


