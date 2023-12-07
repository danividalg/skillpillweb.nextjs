'use client'

import { useState, useEffect } from 'react';
import { useTransition } from 'react'
import { getHello } from '@/app/lib/hello';

export function HelloResponse() {
    const [text, setText] = useState("Loading...");
    let [isPending, startTransition] = useTransition();
    
    function refreshHello() {
        startTransition(async () => {
            setText(await getHello());
        });
    }

    useEffect(() => {
        refreshHello();
    }, []);

    return <div onClick={refreshHello}>{text} !</div>;
}
