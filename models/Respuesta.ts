

class Respuesta {

    public success: boolean;
    public data: any;
    public msg: string;

    constructor() {
        this.success = true;
        this.data = null;
        this.msg = '';
    }

}

export default Respuesta;