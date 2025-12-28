'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  path: string
  icon: React.ReactNode
  title: string
}

export const SidebarItem = ({ path, icon, title }: SidebarItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <li>
      <Link
        href={path}
        className={
          `px-4 py-3
          flex
          items-center
          space-x-4
          rounded-md
          text-gray-600
          hover:bg-gradient-to-r
          hover:bg-sky-600
          hover:text-white
          group
          ${isActive ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`
        }
      >
        {icon}
        <span className={`text-gray-600 group-hover:text-white ${isActive ? 'text-white' : ''}`}>{title}</span>
      </Link>
    </li>
  )
}
