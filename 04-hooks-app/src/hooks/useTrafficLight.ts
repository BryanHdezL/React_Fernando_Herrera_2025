import { useEffect, useState } from 'react'

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TraffictLightColor = keyof typeof colors

export const useTrafficLight = () => {
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

  return {
    // Properties / Values
    light,
    countdown,
    colors,

    // Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',

    // Methots / Actions
  }
}
