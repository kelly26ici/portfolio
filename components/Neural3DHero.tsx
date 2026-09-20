"use client"
import React, { useEffect, useRef, useState } from "react"

interface Node3D {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  baseRadius: number
  color: string
  label?: string
  pulsePhase: number
}

interface Connection3D {
  from: number
  to: number
  activity: number
  signalPos: number
}

export default function Neural3DHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeNodes: 96,
    latentDim: "1536-D",
    inferenceLatency: "42ms",
    orchestrator: "LangGraph",
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }
    window.addEventListener("resize", handleResize)

    // 3D Nodes generation
    const NODE_COUNT = 70
    const nodes: Node3D[] = []
    const colors = ["#10b981", "#06b6d4", "#3b82f6", "#8b5cf6", "#14b8a6"]

    const aiLabels = [
      "LangGraph", "PyTorch", "Qdrant", "FastAPI", "RAG",
      "Claude", "GPT-4o", "Ollama", "M-Pesa", "Redis",
      "Supabase", "FAISS", "Embeddings", "Agents", "Pinecone"
    ]

    for (let i = 0; i < NODE_COUNT; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const radius = 160 + (Math.random() - 0.5) * 40

      nodes.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        baseRadius: Math.random() * 2.5 + 2,
        color: colors[i % colors.length],
        label: i < aiLabels.length ? aiLabels[i] : undefined,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Connections between proximate nodes
    const connections: Connection3D[] = []
    const MAX_DIST = 110

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < MAX_DIST) {
          connections.push({
            from: i,
            to: j,
            activity: Math.random(),
            signalPos: Math.random(),
          })
        }
      }
    }

    // Mouse tracking for 3D rotation
    let targetRotationX = 0
    let targetRotationY = 0
    let currentRotationX = 0
    let currentRotationY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left - width / 2
      const mouseY = e.clientY - rect.top - height / 2
      targetRotationY = (mouseX / width) * 1.2
      targetRotationX = -(mouseY / height) * 1.2
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    // 3D Matrix / Central Geodesic Tensor Vertices
    const icosahedronVertices = [
      [-1, 0.618, 0], [1, 0.618, 0], [-1, -0.618, 0], [1, -0.618, 0],
      [0, -1, 0.618], [0, 1, 0.618], [0, -1, -0.618], [0, 1, -0.618],
      [0.618, 0, -1], [0.618, 0, 1], [-0.618, 0, -1], [-0.618, 0, 1]
    ].map(([x, y, z]) => ({ x: x * 65, y: y * 65, z: z * 65 }))

    let time = 0

    // Render loop
    const render = () => {
      time += 0.015

      // Smooth camera damping
      currentRotationX += (targetRotationX - currentRotationX) * 0.05
      currentRotationY += (targetRotationY - currentRotationY) * 0.05
      const autoAngle = time * 0.25

      const rotY = currentRotationY + autoAngle
      const rotX = currentRotationX + Math.sin(time * 0.3) * 0.1

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      ctx.clearRect(0, 0, width, height)

      // Background ambient glow
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 10,
        width / 2, height / 2, width * 0.45
      )
      bgGrad.addColorStop(0, "rgba(16, 185, 129, 0.06)")
      bgGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.03)")
      bgGrad.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      const fov = 380
      const centerX = width / 2
      const centerY = height / 2

      // Transform function
      const project = (x: number, y: number, z: number) => {
        // Rotate Y
        const x1 = x * cosY - z * sinY
        const z1 = z * cosY + x * sinY

        // Rotate X
        const y2 = y * cosX - z1 * sinX
        const z2 = z1 * cosX + y * sinX

        const scale = fov / (fov + z2 + 250)
        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          scale,
          z: z2,
        }
      }

      // Draw Central Tensor Core (Geodesic edges)
      const projectedCore = icosahedronVertices.map((v) => project(v.x, v.y, v.z))
      ctx.strokeStyle = "rgba(16, 185, 129, 0.18)"
      ctx.lineWidth = 1

      for (let i = 0; i < projectedCore.length; i++) {
        for (let j = i + 1; j < projectedCore.length; j++) {
          const dx = projectedCore[i].px - projectedCore[j].px
          const dy = projectedCore[i].py - projectedCore[j].py
          const dist2D = Math.sqrt(dx * dx + dy * dy)
          if (dist2D < 110) {
            ctx.beginPath()
            ctx.moveTo(projectedCore[i].px, projectedCore[i].py)
            ctx.lineTo(projectedCore[j].px, projectedCore[j].py)
            ctx.stroke()
          }
        }
      }

      // Project Nodes
      const projectedNodes = nodes.map((node, idx) => {
        // Subtle organic float
        const currentX = node.x + Math.sin(time + node.pulsePhase) * 4
        const currentY = node.y + Math.cos(time + node.pulsePhase) * 4
        const currentZ = node.z

        const p = project(currentX, currentY, currentZ)
        return {
          ...node,
          index: idx,
          px: p.px,
          py: p.py,
          scale: p.scale,
          depthZ: p.z,
        }
      })

      // Draw Connections & Signals
      connections.forEach((conn) => {
        const p1 = projectedNodes[conn.from]
        const p2 = projectedNodes[conn.to]
        if (!p1 || !p2) return

        const avgScale = (p1.scale + p2.scale) / 2
        const alpha = Math.max(0.04, Math.min(0.35, 0.15 * avgScale))

        // Synapse line
        ctx.beginPath()
        ctx.moveTo(p1.px, p1.py)
        ctx.lineTo(p2.px, p2.py)
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`
        ctx.lineWidth = Math.max(0.6, 1.2 * avgScale)
        ctx.stroke()

        // Moving data packet signal along axon
        conn.signalPos = (conn.signalPos + 0.008) % 1
        const sigX = p1.px + (p2.px - p1.px) * conn.signalPos
        const sigY = p1.py + (p2.py - p1.py) * conn.signalPos
        const sigRadius = 1.6 * avgScale

        ctx.beginPath()
        ctx.arc(sigX, sigY, sigRadius, 0, Math.PI * 2)
        ctx.fillStyle = "#34d399"
        ctx.fill()
      })

      // Sort nodes by depth for correct occlusion
      projectedNodes.sort((a, b) => a.depthZ - b.depthZ)

      // Draw Nodes
      projectedNodes.forEach((node) => {
        const radius = Math.max(1, node.baseRadius * node.scale)
        const alpha = Math.max(0.3, Math.min(1, (node.depthZ + 200) / 400))

        // Glow ring for key nodes
        if (node.label) {
          ctx.beginPath()
          ctx.arc(node.px, node.py, radius * 2.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(16, 185, 129, ${0.15 * alpha})`
          ctx.fill()
        }

        // Inner core
        ctx.beginPath()
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1

        // Render AI Stack tags in 3D depth
        if (node.label && node.scale > 0.85) {
          ctx.font = `600 ${Math.round(10 * node.scale)}px sans-serif`
          ctx.fillStyle = `rgba(229, 231, 235, ${Math.min(1, alpha * 1.3)})`
          ctx.fillText(node.label, node.px + radius + 4, node.py + 3)
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none"
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing rounded-full"
      />

      {/* Cybernetic Telemetry HUD Overlays */}
      <div className="absolute top-2 left-2 z-20 pointer-events-none flex flex-col gap-1.5">
        <div className="flex items-center gap-2 px-3 py-1 bg-background/80 dark:bg-background/90 backdrop-blur-md border border-text-secondary/15 rounded-full shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[11px] font-bold text-text-primary tracking-wider uppercase">
            3D Neural Engine Active
          </span>
        </div>
        <div className="px-3 py-1 bg-background/70 dark:bg-background/80 backdrop-blur-md border border-text-secondary/10 rounded-lg text-[10px] text-text-secondary font-mono">
          <span>Latent: {activeTelemetry.latentDim}</span> • <span>Latency: {activeTelemetry.inferenceLatency}</span>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
        <div className="px-3 py-1.5 bg-background/80 dark:bg-background/90 backdrop-blur-md border border-text-secondary/15 rounded-xl shadow-lg flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold text-emerald-500">
            LANGGRAPH • QDRANT • PYTORCH
          </span>
        </div>
      </div>
    </div>
  )
}
