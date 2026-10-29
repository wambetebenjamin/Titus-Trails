import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Info } from 'lucide-react';
import { disclaimer, Region } from '@/lib/data';
export function Disclaimer(){return <div className="disclaimer"><Info size={19} aria-hidden="true"/><p><strong>A note before you go.</strong> {disclaimer}</p></div>}
export function RegionCard({region}:{region:Region}) {return <article className="region-card"><Link className="card-image" href={`/trails/${region.slug}`}><Image src={region.image} alt={region.alt} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="image-arrow"><ArrowUpRight size={20}/></span></Link><div className="card-body"><span className="eyebrow">{region.label} <span className="dot">•</span> {region.country.toUpperCase()}</span><h3><Link href={`/trails/${region.slug}`}>{region.name}</Link></h3><p>{region.intro}</p><Link className="text-link" href={`/trails/${region.slug}`}>Explore this region <ArrowRight size={16}/></Link></div></article>}
export function PageHero({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>}
