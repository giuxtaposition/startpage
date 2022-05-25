import type { Link } from './Link'

export interface Section {
    title: string
    color: SectionColor
    links: Link[]
}

export type SectionColor = 'blue' | 'purple' | 'red' | 'orange'
