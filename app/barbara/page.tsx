import {notFound} from 'next/navigation'; import {professionals} from '@/data/professionals'; import ProfessionalPage from '@/components/ProfessionalPage';
export default function Page(){const p=professionals.find(x=>x.slug==='barbara'); if(!p)return notFound(); return <ProfessionalPage p={p}/>}
