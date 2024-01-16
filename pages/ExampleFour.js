import  {useEffect, useState} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function ExampleFour() {
    // var [text, setText] = useState("");
    // number is a var in the left side that is used to display or grab value from useState
    // setNumber is used to update the useState
const [number, setNumber] = useState(0);
const [color, setColor] = useState ("green  ");

const [trigger, setTrigger] = useState(false);

const HandleChange = () => {
    if(number > 2) {
        setColor("orange");
    }
    console.log(number);
}

useEffect(()=>{
    var interval;

    if(trigger){
        interval= setInterval(()=>{
            HandleChange()
            setTrigger(false);
        }, 3000)
    }
    console.log(number);
    console.log(trigger);

    return ()=>clearInterval(interval);
}, [trigger])

return (
    <>
    <Header/>
    <main>
        <button onClick={()=> {
            setNumber(number+1);
            setTrigger(true);
        }}>Add Number</button>
        <h1 style={{ color: color }}>Change the text color</h1>

        {
            number > 1 && <div style={{
                backgroundColor: `${color}`,
                lineheight: 10,
                padding: 40
            }}>
                Box
            </div>
        }
    </main>
    <Footer/>
    </>
)
}