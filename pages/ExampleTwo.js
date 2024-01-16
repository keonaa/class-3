import  {useEffect, useState} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function ExampleTwo() {
    
    useEffect(() => {
        console.log("RUN")
    }, [])
    
    return (
        <>
        <Header/>
        <main>
            <h2>Header 2</h2>
        </main>
        <Footer/>
        </>
    )
}