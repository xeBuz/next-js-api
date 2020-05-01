import useSwr from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/users', fetcher)

  return (
    <div>
      <p>Try the API</p>
    </div>
  )
}
