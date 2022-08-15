import { client } from "../../databases/redis";

const TokenService = {
    async get (id) {
        const now = new Date();
        const dateId = `${now.getHours()}:${now.getMinutes()}`;
        const key = `${id}_${dateId}`

        let value = await client.get(key)

        if (!value) value = this.create(key)
        else if (value >= 10) throw new Error(`Exceeded request limit`)
        else {
            value = parseInt(value) + 1;
            this.update(key, value)
        }

        return value
    },

    async create (key) {
        await client.setEx(key, 60, "1")
        return 1;
    },

    async update (parsedId, value) {
        return await client.set(parsedId, value);
    }
}

export { TokenService }