import React from 'react'

const VerifyEmail = () => {
  return (
    <div className='relative w-full min-h-screen bg-blue-50 flex items-center justify-center px-4'>
        <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center'>
            <h2 className='text-2xl font-semibold text-blue-600 mb-4'>✅ Check Your Email</h2>
            <p className='text-gray-400 text-sm'>
                We've sent you an email to verify your account. Please check your inbox and click the verification link
            </p>
        </div>
    </div>
  )
}

export default VerifyEmail
