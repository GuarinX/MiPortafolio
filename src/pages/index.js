import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

export default function Home() {
  return (
    <>
      <NavBar />    
      <Hero />
      <About />
      <Projects />
    </>
  )
}
