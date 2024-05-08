import React, { Children, ReactNode } from 'react';
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';

function Layout({Children} :{Children:ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen- min-w-full bg-background min-h-screen'>
      <nav>
        <Logo/>
        <ThemeSwitcher/>
        <UserButton afterSignOutUrl="sign-in"/>
      </nav>
      <main className='flex w-full flex-grow'>{Children}</main>
    </div>
  )
}

export default Layout
