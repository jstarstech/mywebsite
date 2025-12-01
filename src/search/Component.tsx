'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon, X } from 'lucide-react'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="relative max-w-2xl mx-auto mb-12"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <SearchIcon
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <Input
        id="search"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        placeholder="Search"
        customClassName="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
      )}
      <button type="submit" className="sr-only">
        submit
      </button>
    </form>
  )
}
