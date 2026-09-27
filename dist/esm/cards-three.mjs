export const name="cards-three";
export const id="dl_de76b67845094f53bce2";
export const url=new URL("../icons/cards-three.svg?v=d1c10b29b5c09284c860789fbd33fb8b589086c2bc96cb453f9b6b5be8dfb03c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
