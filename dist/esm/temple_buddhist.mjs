export const name="temple_buddhist";
export const id="dl_3da7c2d286cb4106acfa";
export const url=new URL("../icons/T/temple_buddhist.svg?v=f714f0f41b6669eb44215f98488a0c0042948e8e0b66846b58e009faca662b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
