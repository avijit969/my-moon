'use client'
import React from 'react'
import { ModeToggle } from '@/components/ModeToggle';
import { Github, Instagram ,Moon} from 'lucide-react';
import Link from 'next/link';
export function NabBar() {
    return (
        <div>
            <nav>
                <div className="flex items-center justify-between shadow-lg p-4 ">
                    <div className='flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200'>My Moon <Moon/></div>
                    <div className='flex items-center gap-2'>
                        <Link href='https://github.com/avijit969' className='p-2 hover:bg-slate-100 rounded-lg'><Github size={20} /></Link>
                        <Link href='https://www.instagram.com/hey_itz_avi?igsh=cHNyczcxbWd2dHIy' className='p-2 hover:bg-slate-100 rounded-lg'><Instagram size={20} /></Link>
                        <ModeToggle />
                    </div>

                </div>
            </nav>
        </div>
    )
}
