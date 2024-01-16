import  {useEffect, useState} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function ExampleThree() {
    
    const [number, setNumber] = useState(0);

    const colors = ["red","orange", "yellow", "greem", "blue", "violet"];

    useEffect(() => {
        if(number > colors.length) {
            setNumber(0);
            console.log("Changing number value" + colors[0]);
        } else {
            console.log("changing number value: " + colors[number]);
        }   
    }, [number])

    return (
        <>
        <Header/>
        <main>
            <h1>Header 3</h1>
            <button 
                style={{backgroundColor: colors[number]}}
                onClick={() => setNumber(number + 1)}>
                    Increment Number
            </button>
            
        </main>
        <Footer/>
        </>
    )
}