import { Router } from 'express';
import { getCliente, getClientes, postClientes, putClientes, deleteClientes } from '../controllers/clientes';

const router = Router();

router.get('/', getClientes);

router.get('/:id', getCliente);

router.post('/', postClientes);

router.put('/:id', putClientes);

router.delete('/:id', deleteClientes);


export default router;