"use client"

import { useCallback, useRef } from "react"

/**
 * A hook that provides a function to play a crisp, tactile click sound.
 * Optimized for low latency and high clarity using Web Audio API.
 */
export function useClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  const play = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const ctx = audioContextRef.current
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      // 1. Use a Square or Triangle wave for more harmonics (crispness)
      oscillator.type = "square"
      
      // 2. High-frequency start with an instant drop
      // This creates the "percussive" transient
      oscillator.frequency.setValueAtTime(1500, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05)

      // 3. High-pass filter to remove "muddy" low-end thumps
      filter.type = "highpass"
      filter.frequency.setValueAtTime(1000, ctx.currentTime)

      // 4. Extremely short Gain Envelope (The "Click" duration)
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime)
      // Linear ramp to 0 feels snappier for very short sounds than exponential
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.04)

      // Connections: Osc -> Filter -> Gain -> Output
      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.start()
      oscillator.stop(ctx.currentTime + 0.05)
      
    } catch (error) {
      console.warn("Audio click playback failed:", error)
    }
  }, [])

  return [play] as const
}