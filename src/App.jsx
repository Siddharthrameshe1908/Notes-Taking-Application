import Navbar from './Navbar'
import Formnote from './Formnote'
import Displaynote from './Displaynote'
import TaskProvider from './TaskProvider'


const App = () => {
  return (
    <>
        <Navbar/>
        <TaskProvider>
          <main className='maintag'>
            <Formnote/>
            <Displaynote/>
          </main>
        </TaskProvider>
    </>
  )
}

export default App



