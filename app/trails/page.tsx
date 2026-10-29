import { PageHero, Disclaimer } from '@/components/Shared';
import { Directory } from '@/components/Directory';
export const metadata={title:'Trail directory'};
export default function Trails(){return <><PageHero eyebrow="EXPLORE WITH CARE" title="Find your starting point." description="A considered introduction to walking regions across Africa. Research first, then follow the local lead."/><section className="section"><div className="container"><Disclaimer/><div className="directory-intro"><h2>Explore the regions</h2><p>These are regional introductions, not verified trail listings. Difficulty, distances, seasons and management details must be confirmed locally.</p></div><Directory/></div></section></>}
