export type Professional = { name:string; slug:string; images:string[]; bio:string; experiences:string[]; whatsappNumber:string };
export const professionals: Professional[] = [
 ...['Rafally','Nanda','Barbara','Anne','Isis'].map(name => ({name,slug:name.toLowerCase(),images:[`/images/${name.toLowerCase()}1.jpg`,`/images/${name.toLowerCase()}2.jpg`,`/images/${name.toLowerCase()}3.jpg`],bio:'Conteúdo provisório — substituir após aprovação.',experiences:['Experiência — conteúdo real a inserir.'],whatsappNumber:''}))
];
