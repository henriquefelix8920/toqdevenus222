import Image from 'next/image';
const imgs=['/images/ambiente1.jpg','/images/ambiente2.jpg','/images/ambiente3.jpg','/images/ambiente4.jpg','/images/detalhe1.jpg','/images/detalhe2.jpg','/images/detalhe3.jpg'];
export default function EditorialGallery(){return <section className="gallery"><p className="eyebrow">FRAGMENTOS</p><h2>Uma atmosfera<br/><i>para sentir.</i></h2><div className="galleryGrid">{imgs.map((src,i)=><div className={`g g${i+1}`} key={src}><Image src={src} alt="Detalhe da atmosfera do Toq de Venus" fill sizes="(max-width:768px) 92vw, 45vw"/></div>)}</div></section>}
