import { useEffect, useState } from "react"

const useClass = () => {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://play-u-server-rajuh301.vercel.app/homeclass')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading];
}
export default useClass;