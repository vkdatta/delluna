export const name="person-arms-spread-light";
export const id="dl_8a3e077418e1427bb44e";
export const url=new URL("../icons/person-arms-spread-light.svg?v=0fd45bf68523728e76b021dd07ae66955dc4075a4ae81d73e1370ff5154a5e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
