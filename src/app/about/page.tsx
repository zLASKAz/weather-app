"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { increment, decrement, reset } from '../store/couterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
interface Data {
    id: number;
    title: string;
    body: string;
}
const AboutPage = () => {
    const [data, setData] = useState<Data[]>([])
    const dispatch = useDispatch<AppDispatch>()
    const count = useSelector((state: RootState) => state.counter.value)
    let listString = ['1', '2', '3']
    let listNumber = [1, 2, 3]


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const jsonData = response.data
                setData(jsonData)
                console.log(jsonData);
            }
            catch (error) {
                console.log(error);
            }
        }
        // fetchData()
        const LearningFilter = () => {
            // const listFilter = listString.filter((index) => index != "2" && index != "1")
            const listFilter = listNumber.filter((index) => index > 2)
            let list = [...listNumber]
            // console.log(listFilter)
            console.log(listNumber)
            console.log(list)

            const lista = list.filter((index) => index = 1)
            console.log(lista)
        }

        LearningFilter()
    }, [])


    return (
        <div>
            <div>
                <h1>Counter App</h1>
                <p>The current count is: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
            {/* 
            <th>
                <div>{data.map((item, key) => {
                    return (
                        <div key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </div>
                    )
                })}</div>
            </th> */}
        </div>
    )
}

export default AboutPage