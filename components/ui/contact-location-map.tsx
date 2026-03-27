"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

/** New York City — adjust to your office coordinates */
const OFFICE: L.LatLngExpression = [40.7128, -74.006]

export function ContactLocationMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el || el.querySelector(".leaflet-container")) return

    const map = L.map(el, {
      zoomControl: false,
      attributionControl: true,
    }).setView(OFFICE, 13)

    // Black basemap with English labels for US locations
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map)

    L.circleMarker(OFFICE, {
      radius: 10,
      fillColor: "#76ABAE",
      color: "#EEEEEE",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.95,
    })
      .addTo(map)
      .bindPopup("<strong>Zynterai</strong><br />New York, United States")

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className="mt-10 w-full">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div />
        {now ? (
          <time
            dateTime={now.toISOString()}
            className="font-mono text-xs tabular-nums text-[#76ABAE]"
          >
            {now.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </time>
        ) : null}
      </div>
      <div
        className="relative isolate overflow-hidden rounded-2xl border border-[#EEEEEE]/12 bg-[#050505] shadow-[inset_0_0_0_1px_rgba(238,238,238,0.06),0_16px_48px_-16px_rgba(0,0,0,0.7)]"
        style={{ minHeight: 320 }}
      >
        <div
          ref={containerRef}
          className="absolute inset-0 z-0 h-full min-h-[320px] w-full [&_.leaflet-control-attribution]:!bg-black/70 [&_.leaflet-control-attribution]:!m-0 [&_.leaflet-control-attribution]:!rounded-none [&_.leaflet-control-attribution]:!text-[10px] [&_.leaflet-control-attribution]:!text-[#a8b0b8]"
        />
      </div>
    </div>
  )
}
