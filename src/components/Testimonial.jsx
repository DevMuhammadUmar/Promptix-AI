import { assets } from "../assets/assets"

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1680066218162-2c0fdbe6f7a9?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Ahmed Hassan',
            title: 'Digital Marketing Manager, Karachi',
            content: 'The article generator and title creator have transformed our content strategy. We can now produce engaging blog posts for our clients in minutes instead of hours.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1723831005305-7046e0e9d34b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Fatima Sheikh',
            title: 'Graphic Designer, Lahore',
            content: 'The background remover and object remover tools are incredible! They have streamlined my design workflow and helped me deliver projects faster to my clients.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1637589274742-8d4c152720a2?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Muhammad Ali',
            title: 'HR Manager, Islamabad',
            content: 'The resume review feature is a game-changer for our recruitment process. It helps us quickly identify the best candidates and saves hours of manual screening.',
            rating: 4,
        },
       
    ]

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, index)=>(<img key={index} src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} className="w-4 h-4 " alt="star"/>))}
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 h-12 object-cover rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial