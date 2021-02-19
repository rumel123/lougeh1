const viewAllSupplier = ({ query }) => {
    return async function select(info) {
        let data = []
        const { id } = info
        if (id) {
            //fetch if have id
            const res = query.fetchSupplier({ id })
            //validate if emptyData
            const length = res.length
            if (length > 0) {
                const items = res
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    data.push({
                        supplier_id: e.supplier_id,
                        companyname: e.companyname,
                        contact: e.contact,
                        address: e.address
                    })
                }
            }
            else {
                const msg = `there's nothing to fetch!`
                return msg
            }
        }
        else {
            //fetch if have id
            const res = query.fetchAllSupplier({ })
            //validate if emptyData
            const length = res.length
            if (length > 0) {
                const items = res
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    data.push({
                        supplier_id: e.supplier_id,
                        companyname: e.companyname,
                        contact: e.contact,
                        address: e.address
                    })
                }
            }
            else {
                const msg = `there's nothing to fetch!`
                return msg
            }
        }

        return data
    }
}


module.exports = viewAllSupplier