import { LogOut, User, Shield } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { getData } from '@/context/userContext'
import axios from 'axios'
import { toast } from 'sonner'
import { Button } from './ui/button'

const Navbar = () => {
    const {user, setUser} = getData()
    const accessToken = localStorage.getItem("accessToken")
    console.log(user);

    const logoutHandler = async()=>{
        try {
            const res = await axios.post(`http://localhost:8000/user/logout`,{},{
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            })
            if(res.data.success){
                setUser(null)
                toast.success(res.data.message)
                localStorage.clear()
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return (
        <nav className='p-3 border-b border-gray-200 bg-white shadow-sm'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* logo section  */}
                <div className='flex gap-2 items-center'>
                    <Shield className='h-6 w-6 text-blue-600' />
                    <h1 className='font-bold text-xl'><span className='text-blue-600'>Auth</span>Pro</h1>
                </div>
                <div className='flex gap-4 items-center'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={user?.avatar} />
                                            <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        Profile
                                    </DropdownMenuItem>
                                   <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={logoutHandler}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex gap-2'>
                                <Link to={'/login'}>
                                    <Button variant="ghost" className="text-blue-600">Login</Button>
                                </Link>
                                <Link to={'/signup'}>
                                    <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
