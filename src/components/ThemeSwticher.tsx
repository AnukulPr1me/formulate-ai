"use client"
import {Tabs,TabsList, TabsTrigger} from "./ui/tabs"
import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { ComputerIcon, MoonStarIcon, SunIcon } from 'lucide-react';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return <Tabs defaultValue={theme}>
      <TabsList className='border'>
        <TabsTrigger value='light' onClick={() => setTheme("light")}>
          <SunIcon className='h-(1.2rem) w-[1.2rem]'/>
        </TabsTrigger>
        <TabsTrigger value='light' onClick={() => setTheme("dark")}>
          <MoonStarIcon className='h-(1.2rem) w-[1.2rem] rotate-90 transition-all dark:rotate-0'/>
        </TabsTrigger>
        <TabsTrigger value='light' onClick={() => setTheme("system")}>
          <ComputerIcon className='h-(1.2rem) w-[1.2rem]'/>
        </TabsTrigger>
      </TabsList>
    </Tabs>
}

export default ThemeSwitcher;
