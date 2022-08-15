import { TokenService } from "../services/entities/token"
let requests = 0;

const TokenController = {
    get: async (req, res) => {
        try {

            requests++
            const call = await TokenService.get(req.params.id);

            console.log(requests) 

            res.status(200).json({
                status: 200,
                message: `You have ${10 - call} requests left`,
            })
        } catch (err) {
            console.log(err)
            res.status(401).json({
                status: 401,
                message: `You have exceeded your call limit`,
            })
        }
    }
}

export { TokenController }