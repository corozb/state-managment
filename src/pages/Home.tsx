import { setAccessToken } from '../redux/slices/auth'
import { useAppDispatch, useAppSelector } from '../hooks'

function Home() {
  const { auth } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  console.log(auth.accessToken)

  const handleLogin = () => {
    dispatch(setAccessToken('123456'))
  }
  return (
    <>
      <div>Home App</div>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Home
