import { useEffect, useState } from 'react'

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TraffictLightColor = keyof typeof colors

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<TraffictLightColor>('red')
  const [countdown, setCountdown] = useState(5)

  // Countdown effect
  useEffect(() => {
    if (countdown === 0) return

    const intervalId = setInterval(() => setCountdown(prev => prev - 1), 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [countdown])

  // Change light color effect
  useEffect(() => {
    if (countdown > 0) return

    if (countdown === 0) {
      setCountdown(5)

      if (light === 'green') setLight('yellow')
      else if (light === 'yellow') setLight('red')
      else if (light === 'red') setLight('green')

      return
    }
  }, [countdown, light])

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Semáforo con useeffect</h1>
        <h2 className="text-white text-xl">Countdown {countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={{ width: `${(countdown / 5) * 100}%` }}></div>
        </div>

        <div className={`w-32 h-32 ${light === 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  )
}
