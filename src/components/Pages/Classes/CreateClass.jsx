import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../provicers/AuthProvider';
const img_hosting_token = import.meta.env.VITE_Image_Uplode_token;

const CreateClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { user } = useContext(AuthContext)


    const email = (user ? user.email : '')
    const onSubmit = data => {





        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, cname } = data;
                    const newItem = { cname, name, price: parseFloat(price), category: parseFloat(category), image: imgURL, email }
                    console.log(newItem)
                    axiosSecure.post('/class', newItem)
                        .then(data => {
                            console.log('after processing new menu item', data.data)

                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })


    };


    return (


        <>
            <Helmet>
                <title>Play-u | Add A Class </title>
            </Helmet>

            <div className="w-full px-10 shadow-lg py-2">


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class name*</span>
                        </label>
                        <input type="text" placeholder="Class name"
                            {...register("cname", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>


                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Available seats*</span>
                            </label>




                            <input type="number" placeholder="Available seats"
                                {...register("category", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />






                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <input className="btn mt-4 btn-outline  " type="submit" value="Add Class" />
                </form>
            </div>
        </>
    );
};




export default CreateClass;