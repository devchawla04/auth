import { ArrowRight, Shield, Lock, CheckCircle2 } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { getData } from '@/context/userContext'

const Hero = () => {
    const {user} = getData()
  const navigate = useNavigate()
  
  if (user) {
    return (
      <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className='font-bold text-4xl md:text-5xl'>Welcome back, <span className='text-blue-600'>{user.username}</span>!</h1>
                <p className="text-gray-600 text-lg">You're successfully authenticated and logged in.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Secure Account</h3>
                  <p className="text-gray-600">Your account is protected with enterprise-grade security</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Verified Email</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Account Active</h3>
                  <p className="text-gray-600">Your account is fully active and ready to use</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4 text-blue-800 border border-blue-200">
                <Shield className="w-3 h-3 mr-1" />
                Secure Authentication
              </Badge>
              <h1 className="text-blue-600 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simple, Secure Authentication
                <span className="text-gray-800"> for Everyone</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Fast, reliable, and secure user authentication. Sign up in seconds, verify your email, and enjoy a seamless login experience.
              </p>
            </div>
            <div className="space-x-4 mt-8">
              <Button onClick={()=>navigate('/signup')} size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={()=>navigate('/login')} variant="outline" size="lg" className="h-12 px-8">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;