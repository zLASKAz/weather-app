"use client"
import Navbar from "@/app/components/Navbar"
import WeatherApp from "@/app/components/WeatherApp"
import { useEffect, useState } from "react"
const Page = () => {
  const list = [
    {
      name: 'Win',
      age: 25
    },
    {
      name: 'Ton',
      age: 25
    },
    {
      name: 'Jeff',
      age: 33
    },
    {
      name: 'Boat',
      age: 26
    }
  ]

  const [newList, setNewList] = useState([])
  useEffect(() => {

    const TranformData = () => {
      for (let i = 0; i < list.length; i++) {
        let data = `${list[i].age}: ${list[i].name}`
        newList.push(data)

      }
    }
    console.log(newList)
    const getAgeByName = (name) => {
      let newValue = name.toLowerCase()
      for (let i = 0; i < newList.length; i++) {

        if (newValue = Object.newList[i].value) {
          console.log(newList[i].key)
        }
      }

    }
    getAgeByName("Boat")
    TranformData()
  }, [list])
  return (
    <div></div>
  )
}
export default Page
