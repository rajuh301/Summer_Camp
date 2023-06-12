import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const { user, loading } = UseAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;

// queryFn: async () => {
        //     const res = await fetch(`https://play-u-server-rajuh301.vercel.app/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },