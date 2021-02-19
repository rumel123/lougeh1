const fetchCustomer = ({postcustomers,query}) => {
    return async function select(info) {
      let data = []
      const { id } = info

      //fetch all data, will message nothing to fetch is theres an empty
        const res = await query.getAllCustomers({})
        const message = `theres nothing to fetch`
        if (!res) return message
        return res 
    }
}

module.exports = fetchCustomer