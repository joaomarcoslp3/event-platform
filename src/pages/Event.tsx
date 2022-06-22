import { Header, Player, Sidebar } from '../components'

export function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Player />
        <Sidebar />
      </main>
    </div>
  )
}
