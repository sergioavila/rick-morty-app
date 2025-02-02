'use client'

import { useState, useEffect } from 'react'
import Form from 'next/form'

export default function CharacterSearch() {
    const [search, setSearch] = useState<string>('')
    const [label, setLabel] = useState<string>('')
    const [characters, setCharacters] = useState<any[]>([])
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value.length > 3) {
            setSearch(value)
            setLabel(`Searching for ${value}...`)
        } else {
            setLabel('')
            setCharacters([])
        }
    }

    //get characters from api
    const getCharacters = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        const data = await response.json()
        if (data.results) {
            setCharacters(data.results)
            setLabel('')
        }else {
            setCharacters([])
            setLabel('No characters found')
        }
    }

    useEffect(() => {
        if (search) {
            getCharacters()
        }
    }, [search])

    return (
    <Form action={getCharacters}>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search"
        className="p-4 rounded-md w-full block border-2 border-cyan-600 shadow-lg shadow-cyan-500/50 bg-[#0000006e] text-white" 
      />
      <label htmlFor="search" className="text-white text-center mt-4 block text-xs min-h-4">{label}</label>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto"> 
        {characters.map((character) => (
            <div key={character.id} className="flex flex-row gap-4 items-center bg-cyan-600/20 border-2 border-cyan-600 p-4 rounded-md">
              <a className="flex flex-row gap-4 items-center" href={`/characters/${character.id}`}>
                <img src={character.image} alt={character.name} className="w-16 h-16 rounded-full" />
                <h2>{character.name}</h2>
              </a>         
            </div>
        ))}
      </div>
    </Form>
    )
}   
